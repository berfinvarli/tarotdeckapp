import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

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
}

const CardDisplay: React.FC<Props> = ({ cards, selectedCount, onSelect, resetTrigger }) => {
  const [flipped, setFlipped] = useState<boolean[]>(cards.map(() => false));

  useEffect(() => {
    setFlipped(cards.map(() => false));
  }, [resetTrigger, cards]);

  const screenWidth = Dimensions.get('window').width;

  const cardWidth = screenWidth <= 480 ? 65 : 90; 
  const cardHeight = cardWidth * 1.75;

  return (
    <ScrollView horizontal={false} contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {cards.map((card, index) => (
          <TouchableOpacity key={card.id} onPress={() => {
            if (flipped[index] || selectedCount >= 3) return;
            const newFlipped = [...flipped];
            newFlipped[index] = true;
            setFlipped(newFlipped);
            onSelect(card);
          }}>
            <Image
              source={flipped[index] ? card.image : require('../assets/images/back.png')}
              style={[styles.cardImage, { width: cardWidth, height: cardHeight }]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: { alignItems: 'center', justifyContent: 'center', paddingVertical: 10 },
  container: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  cardImage: { margin: 5, resizeMode: 'contain' },
});

export default CardDisplay;
