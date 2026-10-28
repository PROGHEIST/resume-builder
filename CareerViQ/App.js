import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const features = [
  { icon: '✦', title: 'AI Resume Builder', detail: 'Create a resume that stands out', tint: '#EDE9FE', ink: '#6D5AE6' },
  { icon: '⌕', title: 'Explore Careers', detail: 'Find roles that fit your skills', tint: '#DDF7EE', ink: '#16866B' },
  { icon: '▤', title: 'Interview Prep', detail: 'Practice with more confidence', tint: '#FFF0D8', ink: '#B87512' },
];

function FeatureCard({ icon, title, detail, tint, ink }) {
  return (
    <TouchableOpacity activeOpacity={0.82} style={styles.featureCard}>
      <View style={[styles.featureIcon, { backgroundColor: tint }]}>
        <Text style={[styles.featureIconText, { color: ink }]}>{icon}</Text>
      </View>
      <View style={styles.featureCopy}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDetail}>{detail}</Text>
      </View>
      <Text style={styles.chevron}>›</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7F8FC" />
      <ScrollView contentContainerStyle={styles.page} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.brandMark}><Text style={styles.brandLetter}>C</Text></View>
            <Text style={styles.brandName}>Career<Text style={styles.brandAccent}>ViQ</Text></Text>
          </View>
          <TouchableOpacity accessibilityLabel="Notifications" style={styles.bell}>
            <Text style={styles.bellText}>♧</Text>
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <View style={styles.pill}><View style={styles.pillDot} /><Text style={styles.pillText}>YOUR CAREER, REIMAGINED</Text></View>
          <Text style={styles.heroTitle}>Your next chapter{ '\n' }starts <Text style={styles.heroAccent}>here.</Text></Text>
          <Text style={styles.heroSubtitle}>Build your future with the right tools, guidance, and confidence.</Text>
          <TouchableOpacity activeOpacity={0.85} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Build my resume</Text>
            <Text style={styles.buttonArrow}>↗</Text>
          </TouchableOpacity>
          <View style={styles.heroDecorOne} />
          <View style={styles.heroDecorTwo} />
        </View>

        <View style={styles.sectionHeading}>
          <View><Text style={styles.sectionTitle}>Your career toolkit</Text><Text style={styles.sectionSubtitle}>Everything you need to move forward</Text></View>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>

        <View style={styles.featureList}>
          {features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}
        </View>

        <View style={styles.tipCard}>
          <View style={styles.tipIcon}><Text style={styles.tipIconText}>✧</Text></View>
          <View style={styles.tipCopy}>
            <Text style={styles.tipEyebrow}>A LITTLE CAREER BOOST</Text>
            <Text style={styles.tipTitle}>Small steps. Big possibilities.</Text>
            <Text style={styles.tipDetail}>Make a little progress today. Your future self will thank you.</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Made for your next move.</Text>
          <Text style={styles.footerBrand}>CareerViQ ©</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F7F8FC' },
  page: { paddingHorizontal: 22, paddingTop: 14, paddingBottom: 30 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 26 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  brandMark: { width: 38, height: 38, borderRadius: 13, backgroundColor: '#6658E8', alignItems: 'center', justifyContent: 'center' },
  brandLetter: { color: '#FFFFFF', fontSize: 23, fontWeight: '900' },
  brandName: { color: '#20243A', fontSize: 22, fontWeight: '800', letterSpacing: -0.7 },
  brandAccent: { color: '#6658E8' },
  bell: { width: 42, height: 42, borderRadius: 15, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#ECECF4', alignItems: 'center', justifyContent: 'center' },
  bellText: { color: '#373A52', fontSize: 22 },
  notificationDot: { position: 'absolute', top: 9, right: 10, width: 7, height: 7, borderRadius: 4, backgroundColor: '#F28A72', borderWidth: 1, borderColor: '#FFFFFF' },
  hero: { backgroundColor: '#24213F', borderRadius: 28, padding: 23, paddingTop: 25, paddingBottom: 24, overflow: 'hidden', marginBottom: 30 },
  pill: { alignSelf: 'flex-start', flexDirection: 'row', alignItems: 'center', gap: 7, backgroundColor: '#3A365B', paddingHorizontal: 11, paddingVertical: 7, borderRadius: 30, marginBottom: 18 },
  pillDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#A9A0FF' },
  pillText: { color: '#D8D4FF', fontSize: 9, fontWeight: '800', letterSpacing: 1 },
  heroTitle: { color: '#FFFFFF', fontSize: 35, lineHeight: 41, fontWeight: '800', letterSpacing: -1.2, marginBottom: 12 },
  heroAccent: { color: '#B7AEFF' },
  heroSubtitle: { color: '#D1D0E3', fontSize: 14, lineHeight: 22, maxWidth: 270, marginBottom: 22 },
  primaryButton: { alignSelf: 'flex-start', backgroundColor: '#887BFF', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', gap: 18, zIndex: 1 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 13, fontWeight: '800' },
  buttonArrow: { color: '#FFFFFF', fontSize: 17, fontWeight: '700' },
  heroDecorOne: { position: 'absolute', width: 170, height: 170, borderRadius: 85, borderWidth: 1, borderColor: '#484366', right: -76, top: 35 },
  heroDecorTwo: { position: 'absolute', width: 120, height: 120, borderRadius: 60, backgroundColor: '#393456', right: -38, top: 62, opacity: 0.7 },
  sectionHeading: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 },
  sectionTitle: { color: '#22243A', fontSize: 19, fontWeight: '800', letterSpacing: -0.4 },
  sectionSubtitle: { color: '#85879A', fontSize: 11, marginTop: 5 },
  seeAll: { color: '#6658E8', fontSize: 12, fontWeight: '800' },
  featureList: { gap: 11, marginBottom: 24 },
  featureCard: { backgroundColor: '#FFFFFF', borderRadius: 19, padding: 14, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#EEEEF5' },
  featureIcon: { width: 48, height: 48, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  featureIconText: { fontSize: 25, fontWeight: '700' },
  featureCopy: { flex: 1, marginLeft: 13 },
  featureTitle: { color: '#292B40', fontSize: 13, fontWeight: '800', marginBottom: 5 },
  featureDetail: { color: '#8A8B9D', fontSize: 11 },
  chevron: { color: '#A6A7B6', fontSize: 25, marginLeft: 8, marginRight: 2 },
  tipCard: { backgroundColor: '#ECEAFF', borderRadius: 21, padding: 17, flexDirection: 'row', alignItems: 'flex-start', gap: 13 },
  tipIcon: { width: 39, height: 39, borderRadius: 13, backgroundColor: '#D8D3FF', alignItems: 'center', justifyContent: 'center' },
  tipIconText: { color: '#6658E8', fontSize: 25 },
  tipCopy: { flex: 1 },
  tipEyebrow: { color: '#7165C9', fontSize: 9, fontWeight: '900', letterSpacing: 1, marginBottom: 7 },
  tipTitle: { color: '#292744', fontSize: 14, fontWeight: '800', marginBottom: 6 },
  tipDetail: { color: '#77748F', fontSize: 11, lineHeight: 17 },
  footer: { marginTop: 24, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  footerText: { color: '#A0A1B0', fontSize: 10 },
  footerBrand: { color: '#898A9D', fontSize: 10, fontWeight: '700' },
});
