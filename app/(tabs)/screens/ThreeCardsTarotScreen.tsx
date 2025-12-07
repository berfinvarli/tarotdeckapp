import CardDisplay from '@/components/CardDisplay';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text } from 'react-native';
import { cards as allCards } from '../../../data/cards';

export default function ThreeCardsTarotScreen() {
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Select Your Tarot Cards</Text>
      <CardDisplay
        cards={cards}
        selectedCount={selectedCards.length}
        onSelect={handleSelect}
        resetTrigger={resetTrigger}
        maxSelectionCount={3}
      />
      {selectedCards.map((card, i) => (
        <Text key={i} style={styles.meaning}>
          {card.name}:
          {"\n"}EN: {card.meaning.en}
          {"\n"}TR: {card.meaning.tr}
        </Text>
      ))}
      <Text style={styles.info}>Cards left to select: {3 - selectedCards.length}</Text>
      <Button title="New Tarot Draw" onPress={handleReset} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    color: '#222'
  },
  meaning: { fontSize: 16, textAlign: 'center', marginVertical: 5, color: '#333' },
  info: { fontSize: 16, marginTop: 20, fontStyle: 'italic', color: '#555' },
});