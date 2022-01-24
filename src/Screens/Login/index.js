import React, { useEffect, useState } from "react";
import {
    ImageBackground,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Text,
    Animated,
    Keyboard,
    Alert
} from 'react-native';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import logo from "../../assets/Logo.png";
import bg_wallpeper from "../../assets/wallpaper.png";


export function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [logoSize] = useState(new Animated.Value(150));
    const [position] = useState(new Animated.Value(150));
    const [moveInputs] = useState(new Animated.Value(50));
    const [inputsKeyboard] = useState(new Animated.Value(300));

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", keyboardDidShow);
        Keyboard.addListener("keyboardDidHide", keyboardDidHide);
        Animated.spring(moveInputs, {
            toValue: 0,
            duration: 100,
            bounciness: 20,
            useNativeDriver: false
        }).start();
    }, []);

    function handleLogin(){
        if(email && password){
            setEmail("");
            setPassword("");
            navigation.navigate("Musics");
        }else {
            Alert.alert("Campos obrigatórios","Preencha os campos email e senha!");
        }
    }
    function keyboardDidShow() {
        Animated.parallel([
            Animated.spring(position, {
                toValue: 20,
                duration: 200,
                useNativeDriver: false,
            }).start(),
            Animated.timing(logoSize, {
                toValue: 70,
                duration: 200,
                useNativeDriver: false,
            }).start(),
            Animated.spring(inputsKeyboard, {
                toValue: 120,
                duration: 100,
                useNativeDriver: false,
            }).start()
        ]);
    }
    function keyboardDidHide() {
        Animated.parallel([
            Animated.spring(position, {
                toValue: 150,
                duration: 200,
                useNativeDriver: false,
            }).start(),
            Animated.timing(logoSize, {
                toValue: 150,
                duration: 200,
                useNativeDriver: false,
            }).start(),
            Animated.spring(inputsKeyboard, {
                toValue: 300,
                duration: 100,
                useNativeDriver: false
            }).start()
        ]);
    }
    return (
        <View style={styles.container}>
            <Animated.View style={styles.bg_central}>
                <ImageBackground source={bg_wallpeper} resizeMode="cover" style={styles.bg_wallpeper} />
                <Animated.Image source={logo} style={[styles.logo, {
                    height: logoSize,
                    width: logoSize,
                    top: position,
                }]} />
            </Animated.View>
            <KeyboardAvoidingView>
                <Animated.View style={[styles.inputs, {
                    marginTop: inputsKeyboard,
                    transform: [
                        {
                            translateY: moveInputs,
                        }
                        
                    ]
                }]}>
                    <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} textContentType="emailAddress" style={styles.inpt} placeholderTextColor="white" />
                    <TextInput placeholder="Senha" value={password} onChangeText={(password) => setPassword(password)} textContentType="password" secureTextEntry={true} autoCorrect={false} style={styles.inpt} placeholderTextColor="white" />
                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={styles.textBtn}>Entrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.subTitle}>Criar uma conta agora</Text>
                </Animated.View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191414",
        alignItems: "center",
        justifyContent: "center",
    },
    bg_central: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        alignItems: "center",
    },
    bg_wallpeper: {
        flex: 1,
        width: "100%",
        height: 400,
    },
    logo: {
        alignSelf: "center",
        position: "absolute",
        top: 150,
    },
    inputs: {
        alignItems: "center",
        width: 350,
    },
    inpt: {
        padding: 20,
        backgroundColor: "#474343",
        color: "#FFFFFF",
        marginTop: 20,
        paddingRight: 1,
        fontSize: 20,
        borderRadius: 5,
        width: "100%"
    },
    btn: {
        backgroundColor: "#1DB954",
        marginVertical: 4,
        color: "#FFFFFF",
        padding: 20,
        marginTop: 20,
        borderRadius: 5,
        width: "100%"

    },
    textBtn: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
    },
    subTitle: {
        color: "#FFFFFF",
        marginTop: 10,
        fontSize: 18,
    }
});