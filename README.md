# QuestdrA dark mode, modern, high-converting tech agency landing page web UI design on a solid deep obsidian/black background.
Global Style & Color Palette
 Theme: Sleek neon dark tech aesthetic.
 Colors pitch black ⁠#000000⁠ base, vibrant magenta/pink ⁠#FF0080⁠, cyan ⁠#00E5FF⁠, electric orange ⁠#FF6B00⁠, bright yellow ⁠#FFD600⁠, and subtle dark violet navy gradient overlays.
 Typography: Clean sans-serif modern typography with bold white headers, soft muted gray body text, and gradient-filled accent keywords.
1. Navigation Header
 Top horizontal.
 Left: Logo showing a colorful stylized lettermark with the brand name "Questdrium" and subtitle "NEXT-GEN TECHNOLOGIES".
 Center: Clean white text links: Home, Projects, ill-shaped CTA button with a pink-to-orange gradient reading "Cont
 Left Content: Large white bold headline: "Building Next-Gen Solutions for a Smarter Tomorrow." (where "Smarter Tomorrow" is rendered in a bright pink-to-cyan gradient). Paragraph subtitle in light gray text. Below it, two CTA buttons: a primary orange-to-pink gradient pill button and a dark outlined pill button ("Learn More").
 Right Visual: A glowing 3D vector emblem featuring a stylized circular monogram "Q" with yellow-to-pink gradient neon light trails on a dark radial background. Bright magenta, purple, and blue light streaks arc dynamically around the graphic.
 Social Proof Bar: Small gray text "Trusted by Innovators Worldwide" above minimalist white monochrome logos for AWS, Twilio, Stripe, React, and Node.js.
3. Portfolio Section ("Our Projects")
 Header: Subheading "OUR PROJECTS" in cyan, followed by headline "Innovative Products. Real Impact." ("Real Impact" in pink/orange gradient). Top right features a dark rounded outline button "View All Projects →".
 Cards Grid: A 5-column horizontal grid of dark glassmorphic project cards featuring:
1. SpaceForge: Dark purple space game mockup, green "LIVE" badge, white body text.
2. Gozuos: Green nature/travel banner mockup, green "LIVE" badge.
3. Chatiom: Dark blue app mockup, cyan "BETA" badge.
4. IVR System: Technical dashboard preview, green "LIVE" badge.
5. Windows Apps: Desktop app layout, green "LIVE" badge.
 Bottom includes subtle pagination dots.
4. Technology Stack Section
 Center heading: "TECHNOLOGY STACK" in magenta/violet, followed by white title "Powered by Modern Technologies".
 A grid of 11 dark rounded square tech stack icons with official brand colors: React, Next.js, Node.js, TypeScript, Python, AWS, Docker, PostgreSQL, MongoDB, Redis, Tailwind CSS, and Figma.
5. Stats & "Why Choose Us" Section
 Left Column: Category label "WHY CHOOSE QUESTDRIUM?", headline "We turn ideas into powerful digital solutions." in white/pink gradient, brief description text, and a pink gradient button "About Us".
 Right Column: Grid of 4 dark cards with glowing neon gradient borders and outline icons:
 🚀 20+ Projects Delivered
 👥 10K+ Active Users
 ☁️ 99.9% Uptime
 💖 5+ Years of Innovation
6. Bottom CTA Banner
 Full-width dark banner card with red/purple neon wave lines in the background.
 Bold text: "Ready to build something amazing? Let's create the next big thing together."
 Right side: Gradient button "Get In Touch →".
7. Footer
 Top row: Left brand logo with tagline. 4 columns of white footer links (Company, Services, Resources, Legal) and social icons (Twitter, LinkedIn, GitHub, YouTube).
 Bottom row: Muted gray copyright text "© 2025 Questdrium Technologies. All rights reserved."ium-Tech-Website






 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo66b9Mrm7--wscVZfQVVHdBgZI-UfrVo",
  authDomain: "xolixblock-wallet-9-3793-311d2.firebaseapp.com",
  projectId: "xolixblock-wallet-9-3793-311d2",
  storageBucket: "xolixblock-wallet-9-3793-311d2.firebasestorage.app",
  messagingSenderId: "612440246318",
  appId: "1:612440246318:web:8d8d239daf1bdcb6a7b7bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

## Firebase deployment

The app is configured for Firebase project `xolixblock-wallet-9-3793-311d2`.

1. Copy `.env.example` to `.env.local` for local development.
2. Add a Firebase service account JSON object to `FIREBASE_SERVICE_ACCOUNT_JSON`, or set `GOOGLE_APPLICATION_CREDENTIALS` to its file path. The browser config in this README is public configuration and is not sufficient for server-side Firestore or Storage writes.
3. Authenticate the Firebase CLI:

  ```bash
  npx firebase login
  ```

4. Deploy Firestore rules/indexes, Storage rules, and Firebase Hosting:

  ```bash
  npx firebase deploy --project xolixblock-wallet-9-3793-311d2 --only firestore,storage,hosting
  ```

CMS content is stored in the `siteContent/main` Firestore document. Job applications are stored in the `jobApplications` collection, and uploaded assets use Firebase Storage. Without server credentials, local development falls back to the JSON files under `src/data` and local files under `public/uploads`.



