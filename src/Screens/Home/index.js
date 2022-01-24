import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Animated,
    SafeAreaView,
} from 'react-native';
import logo from "../../assets/Logo.png";

export function Home({ navigation }) {
    const [opacity] = useState(new Animated.Value(0));
    const [align] = useState(new Animated.ValueXY({ x: 0, y: 200 }));
    useEffect(() => {
        Animated.parallel([
            Animated.spring(align.y, {
                toValue: 0,
                speed: 4,
                duration: 400,
                bounciness: 10,
                useNativeDriver: false,
            }).start(),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 500,
                useNativeDriver: false,
            }).start()
        ]);
        if (opacity && align.x !== 0) {
            setTimeout(() => {
                navigation.navigate("Login");
            }, 1500);
        }
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Animated.View >
                <Animated.Image source={logo} style={[{
                    opacity: opacity,
                    transform: [
                        {
                            translateY: align.y,
                        }

                    ]
                }]} />
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191414",
        alignItems: "center",
        justifyContent: "center"
    },
});