import React, { useEffect, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardDisplay from '../../../components/CardDisplay';
import { cards as allCards } from '../../../data/cards';

interface Props {
    language: "en" | "tr";
}

export default function YesNoTarotScreen({ language }: Props) {
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
        if (selectedCards.length >= 1) return;
        if (!selectedCards.includes(card)) setSelectedCards([...selectedCards, card]);
    };

    const handleReset = () => {
        setSelectedCards([]);
        shuffleCards();
        setResetTrigger(prev => !prev);
    };

    const getAnswer = (card: any, lang: "en" | "tr") => {
        return card.answer[lang];
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
            {selectedCards.map((card, i) => (
                <View key={i} style={styles.meaning}>
                    <Text style={styles.title}>{card.name}</Text>
                    <Text style={styles.meaning}>{getAnswer(card, language)}</Text>
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