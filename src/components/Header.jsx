import React from "react";
import { View, StyleSheet, Image, Text, Font } from "@react-pdf/renderer";
import ProfileImage from "../img/vishal.JPG";
import headerBackground from "../img/vishal.JPG";
import HeaderIcon from "./HeaderIcon";
import InternetIcon from "../img/vishal.JPG";
import GitHubIcon from "../img/vishal.JPG";
import LinkedInIcon from "../img/vishal.JPG";

// //Primary Bold Font
// import TitilliumWebBlack from "../assets/fonts/TitilliumWeb-Black.ttf";

// Font.register({
//   family: "TitilliumWeb-Black",
//   src: TitilliumWebBlack,
// });

// //Secondary title font
// import TitilliumWebSemiBold from "../assets/fonts/TitilliumWeb-SemiBold.ttf";

// Font.register({
//   family: "TitilliumWeb-SemiBold",
//   src: TitilliumWebSemiBold,
// });

// Define your styles
const styles = StyleSheet.create({
    container: {
        display: "flex",
        position: "absolute",
        width: "100%",
        color: "#fff",
    },
    headerBackgroundContainer: {
        overflow: "hidden",
        height: "200px",
    },
    headingPrimary: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        // fontFamily: "TitilliumWeb-Black",
    },
    headingSecondary: {
        fontSize: 10,
        fontWeight: "400",
        textAlign: "center",
        // fontFamily: "TitilliumWeb-SemiBold",
    },
    borderCircle: {
        borderRadius: "75%",
    },
    containerHeader: {
        height: "60vh",
        maxHeight: "1050px",
        padding: 0,
        color: "#fff",
        backgroundPosition: "center center",
        marginBottom: "5%",
    },
    profileImageContainer: {
        alignSelf: "center",
        backgroundColor: "#999",
        width: "100px",
        border: "4px solid #999",
        borderRadius: "75%",
        marginTop: "5%",
    },
    profileImage: {
        borderRadius: "75",
    },
    containerIcons: {
        marginTop: 10,
        zIndex: 2,
    },
});

// Define your component
const Header = ({ fullName, primaryPosition }) => {
    return (
        <>
            
        </>
    );
};

export default Header;