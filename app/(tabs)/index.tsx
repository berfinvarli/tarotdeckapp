import React, { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';
import ThreeCardsTarotScreen from './screens/ThreeCardsTarotScreen';
import YesNoTarotScreen from './screens/YesNoTarotScreen';

type Language = "en" | "tr";

export default function App() {
    const [screen, setScreen] = useState<"yesno" | "three">("yesno");
    const [language, setLanguage] = useState<Language>("tr");

    return (
        <View style={{ flex: 1 }}>
            
            <Image
                source={require('../../assets/video/bg.gif')}
                style={styles.container}
                resizeMode="repeat"
            />

            <ScrollView contentContainerStyle={styles.scroll}>
                
                <View style={styles.languageButtonContainer}>
                    <Button
                        title="English"
                        onPress={() => setLanguage("en")}
                        color={language === "en" ? 'pink' : 'gray'}
                    />
                    <Button
                        title="Türkçe"
                        onPress={() => setLanguage("tr")}
                        color={language === "tr" ? 'pink' : 'gray'}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        title="Yes/No Tarot"
                        onPress={() => setScreen("yesno")}
                        color={screen === "yesno" ? 'pink' : 'gray'}
                    />
                    <Button
                        title="Three Cards Tarot"
                        onPress={() => setScreen("three")}
                        color={screen === "three" ? 'pink' : 'gray'}
                    />
                </View>

                <View>
                    {screen === "yesno" && <YesNoTarotScreen language={language} />}
                    {screen === "three" && <ThreeCardsTarotScreen language={language} />}
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,  
        backgroundColor:"white"
    },
    scroll: {
        flexGrow: 1,
        padding: 20,
    },
    buttonContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        gap: 1,
        justifyContent: 'center',
    },
    languageButtonContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        gap: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
