import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import danceHitsImg from "../../assets/dancehits_sm.png";
import topSertanejoImg from "../../assets/top_sertanejo.png";
import pagodeImg from "../../assets/pagode.png";
import desplugadoImg from "../../assets/desplugado.png";
import chillhopImg from "../../assets/chillhop.png";
import happyHitsImg from "../../assets/happy_hits_sm.png";
import happySecImg from "../../assets/happy_hits.png";
import rockImg from "../../assets/rock.png";
import rozeImg from "../../assets/roze.png";
import oneImg from "../../assets/one_week.png";
import globalImg from "../../assets/top50_global.png";
import brasilImg from "../../assets/top_sertanejo.png";
import saoPauloImg from "../../assets/top50_saopaulo.png";

const Topics = ({ title, slide1, slide2, slide3 }) => {
    return (
        <View style={styles.topic}>
            <Text style={styles.titleTopic}>{title}</Text>
            <View style={styles.allTopics}>
                <View style={styles.topicSection}>
                    <Image source={globalImg} style={styles.imgTopic} />
                    <Text style={styles.subTitleTopic}>{slide1}</Text>
                </View>
                <View style={styles.topicSection}>
                    <Image source={brasilImg} style={styles.imgTopic} />
                    <Text style={styles.subTitleTopic}>{slide2}</Text>
                </View>
                <View style={styles.topicSection}>
                    <Image source={saoPauloImg} style={styles.imgTopic} />
                    <Text style={styles.subTitleTopic}>{slide3}</Text>
                </View>
            </View>
        </View>
    );
}
export function Musics() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.sections}>
                <View style={styles.section}>
                    <Image source={danceHitsImg} />
                    <Text style={styles.titleSection}>
                        DanceHits
                    </Text>
                </View>
                <View style={styles.section}>
                    <Image source={topSertanejoImg} />
                    <Text style={styles.titleSection}>
                        Sertanejo
                    </Text>
                </View>
                <View style={styles.section}>
                    <Image source={pagodeImg} />
                    <Text style={styles.titleSection}>
                        Pagode
                    </Text>
                </View>
                <View style={styles.section}>
                    <Image source={desplugadoImg} />
                    <Text style={styles.titleSection}>
                        Desplugado
                    </Text>
                </View>
                <View style={styles.section}>
                    <Image source={chillhopImg} />
                    <Text style={styles.titleSection}>
                        Chillhop
                    </Text>
                </View>
                <View style={styles.section}>
                    <Image source={happyHitsImg} />
                    <Text style={styles.titleSection}>
                        Happy Hits
                    </Text>
                </View>
            </View>
            <View style={styles.recent}>
                <Text style={styles.title}>Tocadas recentemente</Text>
                <View style={styles.recentSections}>
                    <View style={styles.secRecent}>
                        <Image source={happySecImg} style={styles.imgSec} />
                        <Text style={styles.subTitleRecent}>Happy Hits</Text>
                    </View>
                    <View style={styles.secRecent}>
                        <Image source={rockImg} style={styles.imgSec} />
                        <Text style={styles.subTitleRecent}>Rock</Text>
                    </View>
                    <View style={styles.secRecent}>
                        <Image source={rozeImg} style={styles.imgSec} />
                        <Text style={styles.subTitleRecent}>Roze</Text>
                    </View>
                    <View style={styles.secRecent}>
                        <Image source={oneImg} style={styles.imgSec} />
                        <Text style={styles.subTitleRecent}>One Playlist</Text>
                    </View>
                </View>
            </View>
            <Topics title="Paradas"
                slide1="Top 50 Mundo"
                slide2="Top 50 Brasil"
                slide3="Top 50 SP"
            />
            <Topics title="Pod Casts"
                slide1="Top 50 Mundo"
                slide2="Top 50 Brasil"
                slide3="Top 50 SP"
            />
            <Topics title="Musicas Recomendadas"
                slide1="Top 50 Mundo"
                slide2="Top 50 Brasil"
                slide3="Top 50 SP"
            />
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#242424",
    },
    sections: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },
    section: {
        flexDirection: "row",
        margin: 8,
        width: 180,
        height: 65,
        backgroundColor: "#595959",
        borderRadius: 10,
    },
    titleSection: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 18,
        marginLeft: 8,
        fontSize: 15,
        color: "#FFFFFF",
    },
    recent: {
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        paddingLeft: 18,
        color: "#FFFFFF",
        marginTop: 10,
        marginBottom: 4,
    },
    recentSections: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    secRecent: {
        margin: 4,
    },
    imgSec: {
        height: 100,
        width: 92,
    },
    subTitleRecent: {
        marginTop: 4,
        fontSize: 14,
        letterSpacing: 0.4,
        color: "#FFFFFF",

    },
    topic: {
        flexDirection: "column",
        marginTop: 20,
        marginBottom: 10,
        
    },
    allTopics:{
        flexDirection: "row",
    },  
    titleTopic: {
        marginTop: 4,
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        alignSelf: "flex-start",
        marginLeft: 20,
    },
    imgTopic: {
        height: 128,
        width: 112,
        marginTop: 8,
        marginLeft: 18,
    },
    subTitleTopic: {
        fontSize: 15,
        marginLeft: 14,
        color: "#FFFFFF",
        fontWeight: "500",
    }
});