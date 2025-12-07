import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardDisplay from '../../../components/CardDisplay';
import { cards as allCards } from '../../../data/cards';

interface Props {
  language: "en" | "tr";
}

export default function ThreeCardsTarotScreen({ language }: Props) {
  const [cards, setCards] = useState(allCards);
  const [selectedCards, setSelectedCards] = useState<any[]>([]);
  const [resetTrigger, setResetTrigger] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  const shuffleCards = () => {
    const shuffled = [...allCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const handleSelect = (card: any) => {
    if (selectedCards.length >= 3) return;
    if (!selectedCards.includes(card)) setSelectedCards([...selectedCards, card]);
  };

  const handleReset = () => {
    setSelectedCards([]);
    shuffleCards();
    setResetTrigger(prev => !prev);
  };

  const getMeaning = (card: any, lang: "en" | "tr") => {
    return card.meaning[lang].trim();
  };

  const getPositionText = (i: number) => {
    if (language === "en") {
      return i === 0 ? "Past:" : i === 1 ? "Present:" : "Future:";
    }
    return i === 0 ? "Geçmiş:" : i === 1 ? "Şimdi:" : "Gelecek:";
  };

  const infoText =
    language === "en"
      ? `Cards left to select: ${3 - selectedCards.length}`
      : `Seçilecek kart sayısı: ${3 - selectedCards.length}`;

  const buttonTitle = language === "en" ? "New Tarot Draw" : "Yeni Tarot Çekimi";

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CardDisplay
        cards={cards}
        selectedCount={selectedCards.length}
        onSelect={handleSelect}
        resetTrigger={resetTrigger}
        maxSelectionCount={3}
      />

      {selectedCards.length === 3 && (
        <View>
          {selectedCards.map((card, i) => (
            <View key={i}>
              <Text style={styles.title}>
                {getPositionText(i)} {card.name}
              </Text>
              <Text style={styles.meaning}>{getMeaning(card, language)}</Text>
            </View>
          ))}
        </View>
      )}

      <Text style={styles.info}>{infoText}</Text>
      <Button title={buttonTitle} onPress={handleReset} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#222',
  },
  meaning: { fontSize: 16, textAlign: 'center', marginVertical: 5, color: '#333' },
  info: { fontSize: 16, marginTop: 20, fontStyle: 'italic', color: '#555' },
});
