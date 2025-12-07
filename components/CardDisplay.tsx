import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const CARD_BACK_IMAGE = require('../assets/images/back.png');

interface Card {
  id: number;
  name: string;
  image: any;
  meaning: { en: string; tr: string };
}

interface Props {
  cards: Card[];
  selectedCount: number;
  onSelect: (card: Card) => void;
  resetTrigger: boolean;
  maxSelectionCount: number;
}

const CardDisplay: React.FC<Props> = ({ cards,
  selectedCount,
  onSelect,
  resetTrigger,
  maxSelectionCount
}) => {
  const [flipped, setFlipped] = useState<boolean[]>(cards.map(() => false));
  const animatedValues = useRef(cards.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    setFlipped(cards.map(() => false));
    animatedValues.forEach(val => val.setValue(0));
  }, [resetTrigger, cards]);

  const screenWidth = Dimensions.get('window').width;

  const cardWidth = screenWidth <= 480 ? 65 : 90;
  const cardHeight = cardWidth * 1.75;

  const flipCard = (index: number) => {
    Animated.timing(animatedValues[index], {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  return (
    <ScrollView horizontal={false} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {cards.map((card, index) => {
          const frontRotate = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg'],
          });

          const backRotate = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: ['180deg', '360deg'],
          });

          return (
            <TouchableOpacity
              key={card.id}
              onPress={() => {
                if (flipped[index] || selectedCount >= maxSelectionCount) return;
                const newFlipped = [...flipped];
                newFlipped[index] = true;
                setFlipped(newFlipped);
                flipCard(index);
                onSelect(card);
              }}
            >
              <View style={{ width: cardWidth, height: cardHeight, margin: 5 }}>
                <Animated.View
                  style={{
                    position: 'absolute',
                    width: cardWidth,
                    height: cardHeight,
                    backfaceVisibility: 'hidden',
                    transform: [{ rotateY: frontRotate }],
                    backgroundColor: 'transparent',
                  }}
                >
                  <Image
                    source={CARD_BACK_IMAGE}
                    style={{ width: cardWidth, height: cardHeight, resizeMode: 'contain', backgroundColor: 'transparent', }}
                  />
                </Animated.View>

                <Animated.View
                  style={{
                    position: 'absolute',
                    width: cardWidth,
                    height: cardHeight,
                    backfaceVisibility: 'hidden',
                    transform: [{ rotateY: backRotate }],
                  }}
                >
                  <Image
                    source={card.image}
                    style={{ width: cardWidth, height: cardHeight, resizeMode: 'contain' }}
                  />
                </Animated.View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default CardDisplay;
