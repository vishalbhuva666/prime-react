import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Link } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#F8F9FA',
        padding: 20,
    },
    header: {
        backgroundColor: '#DEE2E6',
        padding: 10,
        textAlign: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subHeaderText: {
        fontSize: 12,
        marginTop: 5,
    },
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    leftColumn: {
        flex: 1,
        paddingRight: 10,
        borderRight: '1px solid #E0E0E0',
    },
    rightColumn: {
        flex: 2,
        paddingLeft: 10,
    },
    section: {
        marginVertical: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 10,
        marginBottom: 5,
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    icon: {
        width: 15,
        height: 15,
        borderRadius: '50%',
        marginRight: 5,
    },
    iconLink: {
        color: '#000',
        textDecoration: 'none'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        marginBottom: 10,
        alignSelf: 'center',
    },
});

// Dummy data for demonstration
const data = {
    name: 'Vishal Bhuva',
    title: 'Software Devloper | SharePoint(Spfx/react) | Node.js | React | PHP | JavaScript ',
    profile: 'Experienced SPFx React Developer with a strong background in developing and customizing SharePoint solutions using the SharePoint Framework (SPFx) and React. Proficient in modern web technologies, including TypeScript, JavaScript, HTML5, and CSS3. Adept at creating responsive and user-friendly interfaces with a focus on performance and scalability.',
    contact: {
        phone: '9724289021',
        email: 'vbhuva358@rku.ac.in',
        address: 'Amrapara Babra Amreli',
        github: 'vishalbhuva666',
        LinkedIn: 'Vishal Ahir',
        Website: 'https://primereactdemo.netlify.app/',
    },
    education: [
        {
            name: 'HSC',
            institution: 'VD Korat Vinay Mandir Babra',
            description: '2018',
            pr: '93.48%'
        },
        {
            name: 'Bachelor of Computer Applications',
            institution: 'Saurashtra University Rajkot',
            description: '2019-2021',
            pr: '8 CGPA'
        },
        {
            name: 'Master of Computer Applications',
            institution: 'Rk University Rajkot',
            description: '2021-2023',
            pr: '9 CGPA'
        },
    ],
    languages: ['English', 'Hindi', 'Gujrati'],
    skills: ["SharePoint", "React", "JavaScript", "CSS", "PHP", "HTML", "Spfx Pnp/js", "MYSQL", "JQuery", "Boostrap/PrimeReact", "Node/Js", "MongoDb"],
    experience: [
        {
            company: 'SharePoint Empower',
            description: 'Software Developer July 2022 - Present',
        }
    ],
};

// Create Document Component
const Resume = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Image style={styles.profileImage} src={require("../img/IMG_3301.png")} />
                <Text style={styles.headerText}>{data.name}</Text>
                <Text style={styles.subHeaderText}>{data.title}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>PROFILE</Text>
                <Text style={styles.text}>{data.profile}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.leftColumn}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>CONTACT ME</Text>
                        <View style={styles.contactRow}>
                            <Image style={styles.icon} src={require("../img/wp.png")}></Image>
                            <Text style={styles.text}><Link style={styles.iconLink} src={`https://wa.me/9724289021?text=${encodeURIComponent("Jay Hind")}`}>{data.contact.phone}</Link></Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Image style={styles.icon} src={require("../img/mail.jpg")}></Image>
                            <Text style={styles.text}>{data.contact.email}</Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Image style={styles.icon} src={require("../img/gitHub.png")}></Image>
                            <Text style={styles.text}><Link style={styles.iconLink} src={'https://github.com/vishalbhuva666'}>{data.contact.github}</Link></Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Image style={styles.icon} src={require("../img/linkdin.png")}></Image>
                            <Text style={styles.text}><Link style={styles.iconLink} src={'https://www.linkedin.com/in/vishal-ahir-52575a17b/'}>{data.contact.LinkedIn}</Link></Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Image style={styles.icon} src={require("../img/web.png")}></Image>
                            <Text style={styles.text}><Link style={styles.iconLink} src={'https://ahirvishal.netlify.app/'}>{data.contact.Website}</Link></Text>
                        </View>
                        <View style={styles.contactRow}>
                            <Image style={styles.icon} src={require("../img/address.png")}></Image>
                            <Text style={styles.text}><Link style={styles.iconLink} src={'https://maps.app.goo.gl/DvbHuv5sJfio7oEb8'}>{data.contact.address}</Link></Text>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>LANGUAGE</Text>
                        {data.languages.map((lang, index) => (
                            <Text key={index} style={styles.text}>
                                {lang}
                            </Text>
                        ))}
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>EDUCATION</Text>
                        {data.education.map((edu, index) => (
                            <Text key={index} style={styles.text}>
                                <Text style={{ fontSize: 12, fontWeight: 500 }}>{edu.name}</Text>{'\n'}
                                {edu.institution} {'\n'}
                                {edu.description} {'\n'}
                                {edu.pr}
                            </Text>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>COMPUTER SKILLS</Text>
                        {data.skills.map((skill, index) => (
                            <Text key={index} style={styles.text}>
                                {skill}
                            </Text>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
                        {data.experience.map((exp, index) => (
                            <Text key={index} style={styles.text}>
                                {exp.company} {'\n'}
                                {exp.description}
                            </Text>
                        ))}
                    </View>
                </View>
            </View>
        </Page>
    </Document >
);


export default Resume;
