import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardDisplay from '../../../components/CardDisplay';
import { cards as allCards } from '../../../data/cards';

interface Props {
    language: "en" | "tr";
}

interface SelectedCardWithState {
    card: any;
    reversed: boolean;
}

export default function YesNoTarotScreen({ language }: Props) {
    const [cards, setCards] = useState(allCards);
    const [selectedCards, setSelectedCards] = useState<SelectedCardWithState[]>([]);
    const [resetTrigger, setResetTrigger] = useState(false);

    useEffect(() => {
        shuffleCards();
    }, []);

    const shuffleCards = () => {
        const shuffled = [...allCards].sort(() => Math.random() - 0.5);
        setCards(shuffled);
    };

    const handleSelect = (cardWithState: SelectedCardWithState) => {
        if (selectedCards.length >= 1) return;
        if (!selectedCards.some(sc => sc.card.id === cardWithState.card.id)) {
            setSelectedCards([...selectedCards, cardWithState]);
        }
    };

    const handleReset = () => {
        setSelectedCards([]);
        shuffleCards();
        setResetTrigger(prev => !prev);
    };

    const getAnswer = (cardWithState: SelectedCardWithState, lang: "en" | "tr") => {
        const { card, reversed } = cardWithState;
        if (reversed) {
            return card.answer_reversed[lang];
        }
        return card.answer[lang];
    };

    const getCardTitle = (cardWithState: SelectedCardWithState) => {
        const { card, reversed } = cardWithState;
        if (reversed) {
            return language === "en" ? `${card.name} (Reversed)` : `${card.name} (Ters)`;
        }
        return card.name;
    };

    const infoText = language === "en" ? `Cards left to select: ${1 - selectedCards.length}` : `Seçilecek kart sayısı: ${1 - selectedCards.length}`;
    const buttonTitle = language === "en" ? "New Tarot Draw" : "Yeni Tarot Çekimi";

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CardDisplay
                cards={cards}
                selectedCount={selectedCards.length}
                onSelect={handleSelect}
                resetTrigger={resetTrigger}
                maxSelectionCount={1}
            />
            {selectedCards.map((cardWithState, i) => (
                <View key={i} style={styles.meaning}>
                    <Text style={styles.title}>{getCardTitle(cardWithState)}</Text>
                    <Text style={styles.meaning}>{getAnswer(cardWithState, language)}</Text>
                </View>
            ))}
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
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
        color: '#222'
    },
    meaning: { fontSize: 16, textAlign: 'center', marginVertical: 5, color: '#333' },
    info: { fontSize: 16, marginTop: 20, fontStyle: 'italic', color: '#555' },
});