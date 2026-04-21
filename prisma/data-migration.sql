-- Categories (Top level)
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3nvh9p0003e7jik3xyeqjk', 'RÉACTIFS', 'reactifs', 'Gammes complètes de réactifs de laboratoire', NULL, '2026-04-18T01:31:24.589Z', '2026-04-18T03:35:57.243Z', 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&q=80&w=800');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3nvhe20004e7jiwf2n17li', 'BIOCHIMIE', 'biochimie', 'Expertise en analyses biochimiques', NULL, '2026-04-18T01:31:24.747Z', '2026-04-18T03:35:56.489Z', '/cat_biochimie_1776479785752.png');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3nvhi00005e7jis8te58tt', 'HEMATOLOGIE', 'hematologie', 'Analyses hématologiques de précision', NULL, '2026-04-18T01:31:24.889Z', '2026-04-18T03:35:56.691Z', 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3paj340004mvweykz8sq1d', 'IMMUNOCHIMIE', 'immunochimie', 'Solutions avancées en immunodiagnostic', NULL, '2026-04-18T02:11:06.400Z', '2026-04-18T03:35:56.575Z', '/cat_immunochimie_1776479864652.png');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3paj9g0006mvwehiq1afrw', 'HÉMOSTASE', 'hemostase', 'Suivi rigoureux de la coagulation', NULL, '2026-04-18T02:11:06.629Z', '2026-04-18T03:35:56.789Z', 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=800');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3pajd20007mvwek3q6n21b', 'HPLC', 'hplc', 'Chromatographie liquide haute performance', NULL, '2026-04-18T02:11:06.758Z', '2026-04-19T01:50:36.758Z', 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3pajfe0008mvwesrpxcjjt', 'IONOGRAMME', 'ionogramme', 'Mesure précise des électrolytes', NULL, '2026-04-18T02:11:06.843Z', '2026-04-19T03:04:16.579Z', '/uploads/1776567856531-1768444686719058.png');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3pajja0009mvwe5piii430', 'CENTRIFUGEUSES', 'centrifugeuses', 'Équipement de séparation de haute qualité', NULL, '2026-04-18T02:11:06.982Z', '2026-04-18T03:35:57.052Z', 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800');
INSERT INTO "public"."Category" ("id", "name", "slug", "description", "parentId", "createdAt", "updatedAt", "image") VALUES ('cmo3pajly000amvweiy0l36fi', 'ACCESSOIRES', 'accessoires', 'Instruments de mélange et accessoires', NULL, '2026-04-18T02:11:07.078Z', '2026-04-18T22:58:45.064Z', 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800');

-- Update Category Parenthood

-- Products
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo4yufsl0009eth54us44hln', 'AS-280', 'as-280-gwtvy', 'BIOELAB ', 'Spécifications Techniques : BIOELAB AS-280
Informations Générales
Modèle :AS-280[cite: 1, 77].
Type de machine : Accès aléatoire (Random access), système ouvert ou fermé (optionnel)[cite: 5].
* [cite_start]**Vitesse de test :** Constante de 200 tests/heure (mono ou double réactif)[cite: 5, 79, 83].
* [cite_start]**Principe de test :** Méthode colorimétrique, turbidimétrie[cite: 5].
* [cite_start]**Méthodes d''analyse :** Point final (1 et 2 points), Temps fixe (Fixed-Time), Cinétique (Kinetics)[cite: 5].
* [cite_start]**Type de calibration :** Linéaire et non linéaire, multi-points jusqu''à 8 points[cite: 5, 112].

### **Unité des Échantillons (Sample Unit)**
* [cite_start]**Capacité du plateau :** 40 positions d''échantillons[cite: 6, 87, 102].
* [cite_start]**Types de tubes :** Micro-cupules, tubes à essai, tubes de prélèvement sanguin[cite: 18].
* [cite_start]**Volume d''échantillon :** 2 à 30 µl, par incréments de 0,1 µl[cite: 22, 99].
* [cite_start]**Sonde d''échantillonnage :** Détection du niveau de liquide, suivi en temps réel du volume et protection anti-collision[cite: 25, 92, 93].

### **Unité des Réactifs (Reagent Unit)**
* [cite_start]**Capacité du plateau :** 80 positions (40 pour R1 et 40 pour R2)[cite: 31, 86, 102].
* [cite_start]**Système de refroidissement :** Système Peltier non-stop, 24h/24 entre 2°C et 14°C[cite: 32, 103].
* [cite_start]**Volume de réactif :** 20 à 300 µl, par incréments de 1 µl[cite: 35].
* [cite_start]**Sonde de réactif :** Détection de surface de liquide et protection anti-collision[cite: 37, 38].

### **Unité de Réaction (Reaction Unit)**
* [cite_start]**Plateau de réaction :** 44 cuvettes de réaction en plastique optique amorphe[cite: 49, 88, 105].
* [cite_start]**Volume de réaction :** 150 µl à 330 µl[cite: 56, 106].
* [cite_start]**Température de réaction :** Système d''incubation Peltier à 37°C ± 0,1°C[cite: 57, 107].
* [cite_start]**Système de lavage :** Automatique à 4 étapes, 2 cycles de lavage[cite: 89].
* [cite_start]**Mélangeur :** Mélangeur indépendant de type hélice avec revêtement téflon pour réduire la contamination croisée[cite: 7, 8, 85, 95].

### **Système Optique**
**Source lumineuse :** Lampe halogène[cite: 11].
* [cite_start]**Longueurs d''onde :** 340, 405, 450, 505, 546, 578, 630, 700 nm (avec 4 options supplémentaires)[cite: 12].
* [cite_start]**Plage d''absorbance :** 0 - 4,0 Abs[cite: 13].
* [cite_start]**Résolution :** 0,0001 Abs[cite: 14].

### **Système d''Exploitation et Logiciel**
* [cite_start]**Compatibilité :** Windows XP, Windows 7, Windows 8, Windows 10[cite: 42].
* [cite_start]**Fonctionnalités logicielle :** Interface conviviale, dilution automatique des échantillons (normale, augmentée, diminuée), vérification automatique des résultats et alarmes, gestion des stocks de réactifs[cite: 109, 110, 111].
* [cite_start]**Contrôle qualité :** Graphiques Westgard, L-T, cumulatif[cite: 113].

### **Conditions de Travail et Dimensions**
* [cite_start]**Alimentation :** AC 110/220V ± 10%, 50/60 Hz, 650W[cite: 60].
* [cite_start]**Consommation d''eau :** Maximum 8 L/heure[cite: 61].
* [cite_start]**Dimensions :** 745 mm (L) x 540 mm (l) x 530 mm (H)[cite: 71].
* [cite_start]**Poids :** 45,4 kg[cite: 71].

Photos à Extraire (Description)
1.Vue du produit : La photo principale montrant l''analyseur avec son capot bleu relevé, révélant les sondes et les plateaux internes .
2.Interface Logicielle : La capture d''écran montrant l''interface utilisateur avec les grilles de données et les icônes de contrôle ', '[]', NULL, '["/uploads/1776554777846-3406e3f080cff89509270b153c5605af.png","/uploads/1776554777863-af229def5a4c550e81a41b711b55221d.png","/uploads/1776554777869-e848e760339189d968ea71d38a5ce2d9.jpg","/uploads/1776554777858-1340380b0f603ccfb7157fa5251bb2e9.jpg","/uploads/1776554777776-674e1b5c4b6ccad4875b5d832cee2604.jpg"]', 'cmo3nvhe20004e7jiwf2n17li', '2026-04-18T23:26:17.973Z', '2026-04-19T00:48:47.970Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo51c13s000beth5vmt3df0w', 'DS-261&DS-301', 'ds-261ds-301', 'Fuyoumed', '
 Fully Automatic Biochemistry Analyzer * With stronger and more convenient software

* Automatically test error correcting function(Patented)



* Intelligent control and calibration management function(Patented), greatly improve QC and efficiency



* Innovatve gas/bubble eliminator(Patented), effectively remove all bubbles in the water to ensure more accurate results



* Automatic maintenance function, greatly reduce failure rate and maintenance work



* Innovative probes of higher liquid detection sensitivity and greatly avoiding carry over



* Suitable for small and medium-sized medical institutions or specialized hospital, can be loaded with pet diagnosissoftware for veterinary clinics', '[]', NULL, '["/uploads/1776558957806-2023-6-25-16876785036580.webp","/uploads/1776558957898-2023-6-25-16876785023550.webp","/uploads/1776558957745-2023-6-25-16876785050380.webp","/uploads/1776558957733-1687678426273197.png","/uploads/1776558957743-1687678387983185.png","/uploads/1776558957731-1687678294271498.png","/uploads/1776558957728-1687678572174343_(1).png"]', 'cmo3nvhe20004e7jiwf2n17li', '2026-04-19T00:35:57.977Z', '2026-04-19T00:59:05.395Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo5251om000deth5i800zib0', 'CHEM 200 PRO', 'chem-200-pro', 'Gesan', 'Caractéristiques
Mode d''utilisation
automatique
Applications
vétérinaire
Configuration
de paillasse, compact
Type d''échantillons
clinique
Options
avec écran tactile
Cadence
200 p/h

Volume d''échantillon
Max: 0,3 ml
(0,010144 US fl oz)

Min: 0,002 ml
(0,000068 US fl oz)

Nombre de positions d''échantillons
60 unit

Volume de réactifs
Max: 0,35 ml
(0,01 US fl oz)

Min: 0,01 ml
(0 US fl oz)

Nombre de positions de réactifs
30 unit

Poids
50 kg
(110,2 lb)

Largeur
65 cm
(25,6 in)

Hauteur
50 cm
(19,7 in)

Description
L''analyseur chem 200 PRO est la solution idéale pour les laboratoires de haute qualité.

Le matériel et le logiciel ont été testés pour réduire les coûts du laboratoire et simplifier le flux de travail.

Le Chem 200 PRO est un analyseur facile à utiliser. Il est facile à utiliser et à entretenir, grâce à l''excellente interface graphique avec écran tactile intégré et lecteur QRCODE, aux procédures d''entretien entièrement automatisées et au QRCODE dédié aux réactifs pour la saisie de la date d''expiration du lot et d''autres paramètres clés.

Le module d''échantillonnage utilise un rack de réactifs amovible à 30 positions. Le boîtier est réfrigéré par cellule Peltier afin de maximiser la stabilité des réactifs à bord. Il peut analyser jusqu''à 60 échantillons et réaliser jusqu''à 200 tests par heure.

Le Chem 200 PRO est également disponible en version VET en combinaison avec ses propres réactifs dédiés et à code-barres. L''analyseur VET fournit des rapports personnalisables pour chaque espèce animale, est facile à utiliser et permet la création d''une variété de profils, tels que générique, préopératoire, postopératoire, hépatique, rénal et métabolique.

Le contrôle du diagnostic à distance permet au personnel du service de résoudre les erreurs rapidement et efficacement sans avoir à se rendre sur place.

FICHE TECHNIQUE

Méthodes d''analyse - Point final (bichromatique-différentiel-échantillon vierge), cinétique, temps fixe, turbidimétrie

Courbe d''étalonnage - linéaire, non linéaire, cubique - spline, multipoint, log - logit

Cuvettes d''échantillonnage - Tubes de 12 -13 mm, 5 - 7 ml / coupelles de 0,5-1,5 ml (nécessitent un adaptateur en métal) - en option 20 tubes de 12 -13 mm, 5 - 7 ml / coupelles de 0,5-1,5 ml (nécessitent un adaptateur en métal)
(nécessitent un adaptateur métallique) - en option 20 tubes de 12 -16 mm / 20 coupelles (type Hitachi).

Dilution de l''échantillon - Oui - Automatique par logiciel

Code-barres de l''échantillon - Lecteur de code-barres interne (en option)

Technologie de pipetage - Détection capacitive du niveau de liquide ; capteur de choc de l''aiguille ; aiguille revêtue de verre céramique
---', '[]', NULL, '["/uploads/1776560311484-68586-15547958.webp","/uploads/1776560311486-68586-17480922.webp","/uploads/1776560311487-68586-19684496.webp"]', 'cmo3nvhe20004e7jiwf2n17li', '2026-04-19T00:58:31.751Z', '2026-04-19T01:05:37.151Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo52dkbf000feth545z3ixnq', 'Chem 300 plus ', 'chem-300-plus-', 'Gesan', '
L''analyseur de chimie clinique Chem 300 PRO plus dispose d''un menu d''analyse étendu associé à un matériel et un logiciel éprouvés pour augmenter l''efficacité et réduire les coûts de fonctionnement du laboratoire. La dernière génération intègre également le lecteur de code QR des réactifs et l''interface graphique à écran tactile.
Chem 300 PRO plus est un choix double : les deux modules d''échantillonnage de 30 + 30 positions sont une solution très innovante, la répartition de la charge de travail entre les deux modules divise également le temps d''échantillonnage, comme si l''on utilisait deux instruments simultanément, ce qui garantit la continuité du travail même en cas de panne ou d''entretien.

Le contrôle de diagnostic à distance permet au personnel de service de résoudre les problèmes rapidement et efficacement sans avoir à se rendre sur place.

PRODUCT	METHOD
System Type	Fully Automatic, Random Access, STAT sample priority
Throughput	Up to 300 tests / hour
Analysis Methods	Endpoint (Bichromatic-Differantial-Sample blank), Kinetics, Fixed-Time, Turbidimetry
Calibration Curve	Linear, Non Linear, Cubic - Spline, Multi Point, Log - Logit
Sample Type	Serum, Plasma, Urine, CSF
Sample Positions	Removable tray, with 60 positions - Optional 20 tubes + 20 Hitachi cups = 40 positions
Sample Volume 2 - 300 μl	2 - 300 μl
Sample Cuvettes	Tubes of 12 -13 mm, 5 - 7 ml / cups of 0.5-1.5 ml (require a metal adapter) - optional 20 tubes of 12 -16 mm / 20 cups (Hitachi type).
Sample Dilution	Yes - Automatic by software
Stat Samples	Yes
Sampling Technology	Capacitive Liquid Level Detection, needle shock sensor
Sample Barcode	Internal barcode reader
Reagent Positions	2 Removable and Refrigerated Rack with 30 + 30 = 60 Reagent positions
Reagent Volume	5 - 350 μl
Reagent Bottles	20 ml and 50 ml
Pipetting Technology	Capacitive Liquid Level Detection. Needle shock sensor
Reagent Storage	Cooling for both Reagent Rack with independent power supply
Reagent Barcode	Hand barcode reader included
Power Supply 1	00 - 240 Vac, 50 / 60 Hz, single phase with ground
Size / Weight	93 x 74 x 60 cm (W x D x H), 75 kg
Reaction Cuvettes	80 washable BIONEX® cuvettes which allow approximately 20000 tests for a fully loaded rotor
Reaction Volume	210 - 400 μl
Reaction Time	Up to 11 min
Reaction Temperature	38°C ± 0.1°C
Optical Source	1 halogen lamp (6 V, 10 W) with extended UV emission
Optical Range	0 - 3 Abs Linearity ±0.5% from 0.1 to 1.5 Abs
Optical Path	6 mm
Wavelength	8 interference filters of 340, 405, 505, 546, 578, 600, 650, 700 nm, 1 free position, 1 solid position for dark reading
Photo - Amplifier	Photoelectric detector, Signal amplifier, response range, 340 nm to 900 nm
Diluter Syringe	368 μl capacity, long-life syringe
Hydraulic System	8 self-priming peristaltic pumps (life 800 hrs), 2 vacuum pumps Pinch Valve
Wash Station	Needles: 5 dispensating, 6 aspiration, 1 clearing (7 step washing sequence for each cuvette). Less than 3 l/hour water consumption.
Needle Wash	Internal and external with system solution
Run / Reaction Monitor	Operation status monitor on screen
Quality Control	Levey - Jennings Graphics - Westgard Algorithm
Operator Interface	Included touch screen 10”- Intel HD Graphics SO windows - 4 GB DDR3 SDRAM Intel Pentium 1.6 GHz - SSD 64GB
Connections	Ethernet LAN port for LIS host communication, USB port for analyzer connection
Printer	External Printer
Environmental	16 - 30 °C, < 80% humidity', '[]', NULL, '["/uploads/1776560709105-Gesan-production-300-chem-pro-plus.jpg"]', 'cmo3nvhe20004e7jiwf2n17li', '2026-04-19T01:05:09.147Z', '2026-04-19T01:05:09.147Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo52kwsn000heth555cwjut3', 'Chem 400 pro', 'chem-400-pro', 'Gesan', '
Gesan Chem 400 PRO è progettato per soddisfare le esigenze dei laboratori di medie e grandi dimensioni, è un analizzatore di chimica clinica discreto, ad accesso random, completamente automatizzato con piatto portacampioni di grandi dimensioni fino a 115 campioni a bordo, due piatti refrigerati per reagenti da 90 posizioni ciascuno in grado di soddisfare tutte le esigenze del laboratorio. Sistema di misurazione ottica preciso e affidabile, monitoraggio in tempo reale del sistema, sistema di pulizia perfetto che previene la contaminazione in modo completo lo rendono l’alleato perfetto e affidabile per lavorare in estrema qualità.
Chem 400 PRO è un modello da pavimento in grado di eseguire 400 test fotometrici all''ora più 400 test ISE all''ora, il software multifunzione facile da usare offre flessibilità per il funzionamento quotidiano.
Il controllo diagnostico remoto consente al personale di servizio di risolvere gli errori in modo rapido ed efficiente senza una visita in loco.

PRODUCT	METHOD
Overal performance	
Equipment type	Fully automatic discrete, STAT priority
Analysis rate	Constant speed 4000T/H or 800T/H with ISE
Test principle	Colorimetry, turbidimetry, ISE
Analysis method	End-point, kinetics, fixed-time, etc. support single / double wavelength and 1-4 multiple reagent item, linear and non linear calibration
Simultaneous analysis item	88 colorimetric items and 3 ISE items (K, Na Cl optional)
Sample unit	
Sample position	115 sample positions, including 50 routine sample positions, 20 stat positions, 34 calibration positions, 8 QC positions, 3 wash soltion positions. Continuously cooling at calibration and QC positions to keep 5 15°C within 24 hours.
Sample cuveties specification	Standard cup, originalbiood tube, multi-specification
Sample barcode	tube avaible (Ø 12-16 mm x (25-10) mm
12of5, code 128, code 39, UPC/EAN, code 93
Sample	volume 2 µl - 35 µl, 0,1 µlstepping
Sampling technology	Liquid level detection clot detection and collision detection
Sample probe carryng rate	Automatic warm water cleaning.
Carryng rates ≤ 0,1%
Automatic sample dilution	3~170 items
Reagent unit	
Reagent probe	2, with the function of liquid level detection and collision detection
Reagent volume	20 µl - 350 µl, 1 µl stapping
Reagent position	Double reagent disk, 45x2, continuous 5-15°C cooling within 24 hours, loading 70 ml and 20 ml standard reagent kit
Reagent barcode	Code 128
Reagent probe carryng rate	Automatic warm water cleaning.
Carryng rates ≤ 0,1%	Carryng rates ≤ 0,1%
Reaction unit	
Reaction cuvette	120 positions opticalplasti cup, optical diameter is 6 mm
Total volume of reaction liquid	150 µl ~ 450 µl
Reaction time	Random setting within 3~15 minutes
Reaction temperature	37°C. ± 0,1°C
Optical system	
Light source	20W / 12V halogen lamps. Life is 2000 hours
Monocromator	Grating photometry
Photoelectron road	After spectrophotometry
Wavelenght	340 nm, 380 nm, 405 nm, 450 nm, 480 nm, 505 nm, 546 nm, 570 nm, 600 nm, 660 nm, 700 nm, 800 nm,
Detector	Photodiode led array
OD linear range	0 - 3,3 Abs
Calibration and QC	
Calibration method	1 point linear method, 2 point linear method, multiple point linear method, non-linear method Calibration tracking Automatic description calibration K-value trends QC
Calibration tracking	Automatic description calibration K-value trends
QC metod	Real time QC, days QC and day QC
Out of control processing	Alarming for out of control sample, record lost control reason
Operating system	
Pc operating system	Windows XP
Analysis control software	English version graphical operating software
Main function of software	Automatic calibration, automatic barcode scanning, item compounding test, reagent info management, serum index, whole reaction process monitoring, dirty cup memory evading, prevent cross-contamination procedure, patient information memory and association input, automatic report audit, data multiple parameter query, report format statistic and printing, reference range classification, alarming information classification, user operating right classification, auto- matic dormancy and wake, real-time online help.
Report printing	Report format support the user-defined mode, QC and state information etc.
PC configuration	CPU ≥ 2.2 GHz (dual core processor); Memory ≥ 1 G; Hard Disk ≥ 160 G; 17 inch LCD display; stylus, inkjet or laser printer (optional)
System connection	TCP/IP network connection, standard
OthersRS	232C
Power supply	Voltage AC 220V ± 22V, 50 Hz ± 1Hz, power 2KVA
Peak water consumption	≤ 25 L/H
Reactiont disk costant temperature	Circulating water 2, after joining reagent, blending immediately
Mixing needle	7 stops, 11 steps by warm woter rinsing
Reaction cuvette cleaning	Two diffluence for high and low concentration waste water
Wastewater treatment	With the function of concentrated waste liquid level alarming', '[]', NULL, '["/uploads/1776561051890-CHEM-400.webp"]', 'cmo3nvhe20004e7jiwf2n17li', '2026-04-19T01:10:51.911Z', '2026-04-19T01:10:51.911Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo52s516000jeth5f6iye60z', 'ES-105  Semi-Auto Chemistry Analyzer', 'es-105-semi-auto-chemistry-analyzer', 'Bioelab', 'ES-105 Technical specifications
Test method
1 point end, 2 point end(Sample blank), Kinetics, Fixed-time, Coagulation(optional)

Optics
7 standard filters (340nm, 405nm, 450nm, 505nm, 546nm, 578nm, 630nm). 2 more for optional

Lamp house
Long-life tungsten halogen lamp(6V/10W), auto-sleep function

Display
7.0"TFT LCD with touch screen, 800*480 pixels

Printer
Build-in thermal printer, 57mm printer paper

Flow cell capacity & optical path
32ul, 10mm

Resolution
0.0001 Abs

Photometric range
0.0000-4.0000 Abs

CPU
ARM Cortex-A8, 800MHz

Memory(Storage)
4GB; Over 300 programs, 200000 results can be stored

Operational environment
Temperature 10℃~30℃; Humidity 30%~80%

Power requirement
Wide power supply AC 100-240V, 50/60 Hz', '[]', NULL, '["/uploads/1776561389159-de9792823aaf55faf0f88e071a2d4884.png"]', 'cmo3nvhe20004e7jiwf2n17li', '2026-04-19T01:16:29.178Z', '2026-04-19T01:16:29.178Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo52zzkh000leth5nutp7f7h', 'Getein 1160  Immunofluorescen CE Analyseur quantitatif', 'getein-1160-immunofluorescen-ce-analyseur-quantitatif', 'Getein', 'int Utilisation terminée

Getein 1160 est un analyseur multicanal qui possède 4 canaux d''incubation et 1 canal d''essai d''urgence, et a également un environnement de test constant avec 32 pour garantir des résultats de test plus précis.



Fonctionnalités

plusieurs canaux

4 canaux d''incubation + 1 canal d''essai d''urgence
Les éléments de test multiples peuvent être testés en même temps

Température constante

32â Environnement de test régulier <6 36
Résultats de test plus précis

TECHNOLOGIE DE PERLES lyophilisée

Pipette de transfert brevetée, réalisant un échantillonnage précis
Amélioration de la précision, de la stabilité et de la sensibilité

Fonctionnement facile

Système Android, écran tactile

Calibration de la carte SD, toucher pour la reconnaissance

Spécification S


échantillon


Type d''échantillon: sérum, plasma, sang total, sang capillaire, urine, écouvillon, sliva, tabourets

Volume d''échantillon: 10 ~ 200 μL selon le test

Langue

anglais / chinois / espagnol

Affichage


Écran tactile LED de 10,1 pouces, résolution: 1280 × 800

Poids

4,0 kg

imprimante


imprimante thermique intégrée

imprimante USB

Stockage de données

Plus de 100 000 données

Dimensions

299 mm × 276 mm × 152 mm (W × D × H)



Éléments de test



Marqueurs cardiaques	
CTNI, HS-CTNI, TNT, BNP, NT-PROBNP, H-FABP, CK-MB, CK-MB / CTNI, CK-MB / CTNI / MYO, CK-MB / CTNI / H-FABP


Marqueur de coagulation <1111	
D-Dimer

inflammatn

HS-CRP + CRP, PCT, SAA / CRP, SAA, IL-6

Fonction rénale

CYSC, MALB, NGAL, β2-MG

Diabète

HbA1c

Marqueur métabolique

25-OH-VD

Fonction thyroïdienne

TSH, T3, T4, FT3, FT4

Marqueurs tumoraux

TPSA, FPSA, AFP, CEA

Reproduction / fertilité

HCG + β, FSH, LH, PRL, AMH, Prog, testostérone, E2

Maladie infectieuse

Anti-HCV, anti-TP, anti-HIV, anticorps neutralisant SARS-COV-2, Hbsag, anti-HBS, 2019-NCOV IGM / IgG, Antigène SARS-CoV-2, h. pylori, Fluence A / B, Dengue NS1 AG

Protéine et rhumatisme spécifiques

RF, ASO, anti-CCP', '[]', NULL, '["/uploads/1776561755318-de9792823aaf55faf0f88e071a2d4884.png","/uploads/1776561755119-09cdc0e5d7245d5c4fd99c0abdbadba1.png","/uploads/1776561755313-d89f65a9bb2438e80b61d9b3694d5300.png","/uploads/1776561755321-ec4f04362e4b571bbc68b3812d23601a.png","/uploads/1776561755085-0f8f33d923e1d62ed5ded766ef10e641.png","/uploads/1776561755304-173d9482c0bd98eead9e1d148cf276c0.png","/uploads/1776561755309-cfd89ccf7980eb72702e1adc61950d63.png"]', 'cmo3paj340004mvweykz8sq1d', '2026-04-19T01:22:35.345Z', '2026-04-19T01:23:44.905Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo53bo4w000neth5d803vvfo', 'MAGICL 6000  Analyseur d''immunoessai par chimiluminescence', 'magicl-6000-analyseur-dimmunoessai-par-chimiluminescence', 'Getein', 'Utilisation prévue

L''analyseur d''immunoessai par chimiluminescence MAGICL 6000 (ci-après appelé MAGICL 6000) automatise la détection et la quantification des biomarqueurs des maladies thyroïdiennes, tumeur, fertilité, maladies infectieuses, métabolisme osseux, maladie cardiaque, diabète sucré, inflammation, anémie et immunoglobulines en analysant des échantillons de sérum, de plasma, de sang total et d''urine humains.


Caractéristiques

Unité de réactif

14 positions de réactifs, prenant en charge le chargement à bord

Reconnaissance automatique des réactifs par lecture du code QR

Système de réfrigération à 2-8 °C, avec durée de conservation d''un mois des régents à bord

Technique de perforation du film PE, empêchant l''évaporation des réactifs


Unité d''échantillonnage

Mélange et débouchage automatiques des tubes d''échantillon

Ajout d''un échantillon avec embouts jetables pour éviter la contamination croisée

Fonction de détection du niveau de liquide, ajoutant un échantillon avec plus de précision


Unité d''échantillonnage

10portoirs d''échantillonsï¼50 positions

Système de reconnaissance vidéo, acquérant l''état réel du niveau de liquide de l''échantillon et évitant un échantillonnage inexact causé par des bulles

Test d''urgence échantillon en priorité


HCT Unité

Le test HCT calcule le volume sérique, garantissant ainsi l''exactitude du test d''échantillon de sang total.


Unité de test

Combinant la station de lavage, la station de test et la station d''incubation en une seule unité

Petite taille avec débit élevé

Conception unique de la station de lavage, excluant l''influence des facteurs liés au sang total


Unité consommable

Module double consommable intégré

Changement continu des consommables sans pauses de test pour une utilisation facile



Spécifications techniques


Principe du test	Chimiluminescence directe de l''ester d''acridinium
Exemples de postes	50
Type d''échantillon	Sang total/sérum/plasma/urine/sang du bout des doigts
Scénarios d''application	Laboratoire
Mode Test	Lot/Aléatoire/STAT
Transmission de données	Connectivité LIS/HIS
Fonctions de détection	
Détection de niveau de liquide, détection de bulles, détection de colmatage de sonde, surveillance de température, surveillance d''inventaire de consommables



Éléments de test

Les éléments marqués d''un * seront bientôt disponibles.

Marqueurs thyroïdiens
T3, T4, FT3, FT4, TSH, TG-Ab, TPO-Ab, TG, *Anti-TSHR, *rT3
Hormones	Testostérone, Estradiol, Progestérone, LH, HCG+β, FSH, GH, PRL, UE3, AMH, SHBG, IgE, *PAPP-A, *Free-β-HCG, *DHEA-S
Métabolisme osseux
25-OH-VD, ostéocalcine, PTH, *CT
Marqueurs cardiovasculaires	hs-cTnl, hs-cTnT, CK-MB, Myo, BNP, NT-proBNP, D-Dimère, HbA1c, ST2, H-FABP, Lp-PLA2, PLA2, *HBP
Marqueurs inflammatoires	PCT, IL-6, SAA, hs-CRP+CRP
Marqueurs tumoraux	Ferritine, ProGRP, HE4, SCC, CA72-4, NSE, tPSA, AFP, fPSA, CEA, CA50, CA19-9, CA125, CA15-3, CYFRA21-1, CA242, PG I, PG II, G17 , S100, *PIVKA-II, *AFP-L3
Maladie infectieuse
Anti-VHC, Anti-TP, AgHBs, Anti-HBs, AgHBe, Anti-HBe, Anti-HBc, Combo Ag/Ab VIH
Soins du diabète
Peptide C, IAA, insuline
Fibrose hépatique
LN, HA, CIV, CG, PIIIP N-P
Hypertension	Cortisol, Rénine, *ACTH, *ALD, *AT-II, *AT-I
Torche	*Toxo IgG, *Toxo IgM, *Rubéole IgG, *Rubéole IgM, *CMV IgG, *CMV IgM, *HSV-1 IgG, *HSV-1 IgM, *HSV-2 IgG, *HSV-2 IgM
Thrombus	*TAT, *FDP, *PIC, *tPAIC, *TM
Autres	*NGAL', '[]', NULL, '["/uploads/1776562300380-ee78544b9b0ed332ad70fb42e83ba7a5_medium.png","/uploads/1776562300382-fc92174aa658ea63330c31438d123d8b_medium.jpg"]', 'cmo3paj340004mvweykz8sq1d', '2026-04-19T01:31:40.401Z', '2026-04-19T01:31:40.401Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo53fs0w000peth5wot37ixi', 'MAGICL 6000i  Analyseur d''immunoessai par chimiluminescence', 'magicl-6000i-analyseur-dimmunoessai-par-chimiluminescence', 'Getein', 'Utilisation prévue

L''analyseur d''immunoessai par chimiluminescence MAGICL 6000i (ci-après appelé MAGICL 6000i) automatise la détection et la quantification des biomarqueurs des maladies thyroïdiennes, des tumeurs, de la fertilité, des maladies infectieuses, du métabolisme osseux, maladie cardiaque, diabète sucré, inflammation, anémie et immunoglobulines en analysant des échantillons de sérum, de plasma, de sang total et d''urine humains.


Caractéristiques

Unité de réactif

24 Positions de réactifs, prenant en charge le chargement à bord

Reconnaissance automatique des réactifs par lecture du code QR

Système de réfrigération à 2-8 °C, avec durée de conservation d''un mois des régents à bord

Technique de perforation du film PE, empêchant l''évaporation des réactifs


Unité d''échantillonnage

Auto mélange et débouchage des tubes d''échantillon

Fonction de détection du niveau de liquide, ajoutant un échantillon avec plus de précision


Unité d''échantillonnage

10 portoirs d''échantillonsï¼50 positions

Système de reconnaissance vidéo, acquérant l''état réel du niveau de liquide de l''échantillon et évitant un échantillonnage inexact causé par des bulles

Test d''échantillon d''urgence en priorité


Unité de test

Combinant une station de lavage, une station de test et une station d''incubation en une seule unité

Petite taille avec débit élevé

Conception unique de la station de lavage, excluant l''influence des facteurs liés au sang total


Unité consommable

Module double consommable intégré

Changement continu des consommables sans pauses de test pour une utilisation facile



Spécifications techniques


Principe du test	Chimiluminescence directe de l''ester d''acridinium
Exemples de postes	50
Type d''échantillon	Sérum/Plasma/Urine/Sang du bout des doigts
Scénarios d''application	Laboratoire
Mode Test	Lot/Aléatoire/STAT
Transmission de données	Connectivité LIS/HIS
Fonctions de détection	
Détection de niveau de liquide, détection de bulles, détection de colmatage de sonde, surveillance de température, surveillance d''inventaire de consommables', '[]', NULL, '["/uploads/1776562492035-66cee63e6cbcdc703d1285734df383f1_medium.jpg","/uploads/1776562492043-d474da417bbfa20a424984826f62da6e.png"]', 'cmo3paj340004mvweykz8sq1d', '2026-04-19T01:34:52.064Z', '2026-04-19T01:34:52.064Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo53monj000reth56ouox11c', 'BHA-3000  Analyseur d''hématologie automatique', 'bha-3000-analyseur-dhmatologie-automatique', 'Getein', 'Utilisation prévue

L''analyseur d''hématologie automatique BHA-3000 est utilisé pour compter les globules rouges, les globules blancs et les plaquettes dans les échantillons de sang, et la colorimétrie est adoptée pour mesurer l''hémoglobine et calculer les paramètres pertinents des cellules sanguines.


Caractéristiques

Système de liquide optimisé

Taux de défaillance extrêmement faible et excellente maintenabilité


Raccord linéaire

Briser la limite de 2 fL de détection du volume plaquettaire


Seuil flottant intelligent

Classification précise et résultat fiable


Aucun résidu

Aucun résidu de diluant hématologique ou de réactif de lyse
Performance à coût élevé

Petit échantillon de sang

Sang veineux : 6 μL
Sang capillaire (mode pré-dilution) : 20 μL
Spécifications

Nom du produit

Analyseur d''hématologie automatique BHA-3000

Paramètres

Alarme d''échantillon anormal
Différentiel leucocytaire en 3 parties
21 paramètres à signaler
3 histogrammes

Tapez

Système d''analyse sanguine

Affichage

Écran résistif de 10,4 pouces

Certificat

CE, NMPA

Demande

Hôpital, Clinique, Laboratoire

Type de réactif

Deux réactifs : 1 diluant et 1 lyse

Mode échantillon

Sang total (veineux/capillaire), pré-dilution

Dimensions

328 mm*425 mm*446 mm (L*L*H)

Poids

16 KG

Environnement de travailEnvironnement de travail

18~30…

≤80 % d''humidité relative
75 kPa~106 kPa


Éléments de test


Globules blancs

WBC

Concentration corpusculaire moyenne en hémoglobine

MCHC

Neutrophile#

NEU#

Hémoglobine corpusculaire moyenne

SMI

Cellule intermédiaire#

#MXD

Largeur de distribution du volume des globules rouges-écart type

RDW-SD

Lymphocytes#

LYM#

Volume spécifique des globules rouges

HCT

% de neutrophiles

NEU%

Plaquettes

PLT

% de cellule intermédiaire

MXD%

Volume moyen des plaquettes

Monospace

% de lymphocytes

LYM%

Largeur de distribution des plaquettes

PDW

Globules rouges

GR

Critique plaquettaire

PCT

Hémoglobine (concentration)

HGB

Rapport plaquettes-grandes cellules

P-LCR

Volume cellulaire moyen

MCV

Nombre de plaquettes et de grandes cellules

P-LCC

Largeur de distribution du volume des globules rouges-coefficient de variation

RDW-CV', '[]', NULL, '["/uploads/1776562814260-875a1af4b6802a933318a10f279fa032_medium.jpg","/uploads/1776562814263-0385090f3c1d5ec43dfaa49f35a4f0d1_medium.jpg","/uploads/1776562814267-téléchargement_(1).png","/uploads/1776562814269-téléchargement.png"]', 'cmo3nvhi00005e7jis8te58tt', '2026-04-19T01:40:14.287Z', '2026-04-19T01:40:14.287Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo53rtre000teth5pyjku79h', 'BHA-5000  Analyseur d''hématologie automatique', 'bha-5000-analyseur-dhmatologie-automatique', 'Getein', 'Utilisation prévue

L''analyseur d''hématologie automatique BHA-5000 utilise la cytométrie en flux laser pour compter les globules blancs dans un échantillon de sang, utilise l''impédance électrique pour compter les globules rouges et les plaquettes, et la colorimétrie pour mesurer l''hémoglobine, et les paramètres pertinents seront énumérés.


Caractéristiques


Trou de 50 µm : Test précis des cellules sanguines avec des trous de pierres précieuses de 50 µm

Filtrage numérique : Supprime efficacement les interférences

Étalonnage de coïncidence : Améliore les capacités analytiques

Double canaux : WBC double canauxClassification 2D à double canaux, plus rapide et plus précise
Spécifications techniques


Paramètres	
Différentiel leucocytaire en 5 parties
25 paramètres à signaler
2 histogrammes
2 grammes de diffusion

Alarme d''échantillon anormal

Mode échantillon	Sang total (veineux/capillaire), pré-dilution
Méthodes de contrôle qualité	LJ QC, XB QC
Alimentation	100-240 V~50/60 Hz
Poids	21 kg
Dimensions	328 mm x 471 mm x 446 mm (L x l x H)
Stockage des données	10 0000
Type d''écran	Écran résistif de 10,4 pouces
Conditions de fonctionnement	18~30°C, ≤80 % d''humidité relative, 75 kPa~106 k Pa

Éléments de test


Globules blancs

WBC

Concentration corpusculaire moyenne en hémoglobine

MCHC

Neutrophile#

N° NEU

Hémoglobine corpusculaire moyenne

SMI

Lymphocytes#

LYM#

Largeur de distribution du volume des globules rouges-écart type

RDW-SD

Monocytes#

LUN#

Volume spécifique des globules rouges

HCT

Éosinophile#

Numéro EOS

Plaquettes

PLT

Basophile#

N° BAS

Volume moyen des plaquettes

Monospace

% de neutrophiles

NEU%

Largeur de distribution des plaquettes

PDW

% de lymphocytes

LYM%

Critique plaquettaire

PCT

% de monocytes

MON%

Rapport plaquettes-grandes cellules

P-LCR

% d''éosinophiles

EOS%

Nombre de plaquettes et de grandes cellules

P-LCC

Basophile%

BAS%

Largeur de distribution du volume des globules rouges-coefficient de variation

RDW-CV

Globules rouges

RBC

Volume cellulaire moyen

MCV

Hémoglobine (concentration)

HGB', '[]', NULL, '["/uploads/1776563054159-15525a2e24e3dd71c9658dc594b7ef1c_medium.jpg","/uploads/1776563054161-téléchargement_(1).png","/uploads/1776563054163-téléchargement_(2).png","/uploads/1776563054165-téléchargement_(3).png","/uploads/1776563054166-téléchargement.png"]', 'cmo3nvhi00005e7jis8te58tt', '2026-04-19T01:44:14.186Z', '2026-04-19T01:44:14.186Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo53vc2t000veth5n5x0c2k2', 'BHA-5100 Fournisseur d''analyseur d''hématologie automatique', 'bha-5100-fournisseur-danalyseur-dhmatologie-automatique', 'Getein', 'Chez Getein, nous nous engageons à écouter les besoins de chaque client et à fournir des solutions sur mesure. Dans le monde clinique d''aujourd''hui, il semble qu''un seul instrument ne soit plus suffisant pour répondre à la demande croissante de tests, de sorte que le système modulaire, qui combine plusieurs instruments de test en un, a été créé. Le Getein BHA-5100, disponible dans le système modulaire Metis 600, répond à toutes ces exigences cliniques et dépasse vos attentes!


Fonctionnalités

grand écran d''affichage
≥ Écran d''affichage LCD de 10,4 pouces

Capable d''afficher les données et les diagrammes simultanément


Technologie automatique de mixage d''échantillons
Éliminer les erreurs causées par le mélange manuel


Échantillonnage automatique de ponction
Évitez les aérosols. Assurer la biosécurité


le plus petit trou de gemme
Le plus petit diamètre de 50 µm de l''industrie pour une sensibilité inégalée


Technologie de seuil flottante
Tube de collecte de sang autorotatif

Système d''échantillonnage standard mécanisé


Technologie de détection
Dispersion laser + technologie d''écoulement de gaine


Spécification

Â Connectivité de l''imprimante laser externe

Â Clavier externe et connectivité de la souris

Â Connectivité bidirectionnelle de LIS et de son

Â Position d''échantillon d''urgence disponible

Â Capacité de stockage: 100 000 données de patient

Les données des patients peuvent être recherchées, supprimées et imprimées

Â Système de test fermé assurant la biosécurité


Dimensions et poids

Largeur: 67 cm (26,38 po)

Profondeur: 70,5 cm (27,76 in)

Hauteur: 57 cm (22,44 po)

Poids: Environ: 21 kg (66,14 lb)


25 sang total signalable

WBC, LYM%, LYM #, Neu%, Neu #, Mon%, Mon #, EOS%, EOS #, BAS%, BAS #, RBC, HGB, HCT, MCV, MCH, MCHC, RDW-SD , RDW-CV, PLT, PDW, MPV, PCT, P-LCR, P-LCC', '[]', NULL, '["/uploads/1776563217853-75da88fd69e143db349f36bace42508b_medium.jpg"]', 'cmo3nvhi00005e7jis8te58tt', '2026-04-19T01:46:57.893Z', '2026-04-19T01:46:57.893Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo54ctfs000xeth5v75drq4m', 'SF-400 Semi Automated Coagulation Analyzer', 'sf-400-semi-automated-coagulation-analyzer', 'Succeeder', '
1. Viscosity based (Mechanical) Detection system.
2. Random tests of clotting tests.
3. Internal USB printer, LIS support.
Technical Specification
1) Testing Method	Viscosity based Clotting method.
2) Testing Item	PT, APTT, TT, FIB, AT-Ⅲ, HEP, LMWH, PC, PS and factors.
3) Testing Position	4
4) Reagent Position	4
5) Stirring Position	1
6) Pre-heating Position	16
7) Pre-heating Time	0~999sec，4 individual timers with counting down display and alarm
8) Display	LCD with adjustable brightness
9) Printer	Built-in thermal printer supporting instant and batch printing
10) Interface	RS232
11) Data Transmission	HIS/LIS network
12) Power Supply	AC 100V~250V, 50/60HZ
Analyzer Introduction
SF-400 Semi Automated Coagulation Analyzer bears the functions of reagent pre-heating, magnetic stirring, automatic print, temperature accumulation, timing indication, etc. The benchmark curve is stored in the instrument and the curve chart can be printed. The testing principle of this instrument is to detect the fluctuation amplitude of the steel beads in the testing slots through magnetic sensors, and to get the testing result by computing. With this method, the test will not be interfered by the viscosity of the original plasma, hemolysis, chylemia or icterus. Artificial errors are reduced with the use of electronic linkage sample application device so that high accuracy and repeatability guaranteed. This product is suitable for detection of blood coagulation factor in medical care, scientific research and education institutions.
Application: Used for measuring prothrombin time (PT), activated partial thromboplastin time (APTT), fibrinogen (FIB) index, thrombin time (TT), etc...', '[]', NULL, '["/uploads/1776564033516-SF-400-2.webp","/uploads/1776564033518-SF-400-5.webp","/uploads/1776564033471-sf-400.webp","/uploads/1776564033520-SF-400-6.webp","/uploads/1776564033441-about-us01.webp","/uploads/1776564033448-about-us02.webp"]', 'cmo3paj9g0006mvwehiq1afrw', '2026-04-19T02:00:33.544Z', '2026-04-19T02:01:06.305Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo54kluv000zeth5fwtf5ikc', 'SF-8100 Analyseur de coagulation entièrement automatisé', 'sf-8100-analyseur-de-coagulation-entirement-automatis', 'Succeeder', '
1. Conçu pour les laboratoires de taille moyenne à grande.
2. Dosage basé sur la viscosité (coagulation mécanique), dosage immunoturbidimétrique, dosage chromogénique.
3. Imprimante et lecteur de codes-barres externes (non fournis), support LIS.
4. Réactifs, cuvettes et solution d''origine pour de meilleurs résultats.
Détails du produit
Introduction à l''analyseur
Le SF-8100 sert à mesurer la capacité d''un patient à former et à dissoudre des caillots sanguins. Pour réaliser différents tests, le SF-8100 intègre deux systèmes de mesure (mécanique et optique) permettant trois méthodes d''analyse : la méthode de coagulation, la méthode par substrat chromogène et la méthode immunoturbidimétrique.

Le SF8100 intègre le système d''alimentation des cuvettes, le système d''incubation et de mesure, le système de contrôle de la température, le système de nettoyage, le système de communication et le système logiciel pour obtenir un système de test entièrement automatisé et autonome.

Chaque unité SF8100 a été rigoureusement contrôlée et testée conformément aux normes internationales, industrielles et d''entreprise en vigueur afin de garantir un produit de haute qualité.
Spécifications techniques
1) Méthode d''essai	Méthode de coagulation basée sur la viscosité, dosage immunoturbidimétrique, dosage chromogénique.
2) Paramètres	PT, APTT, TT, FIB, D-Dimères, FDP, AT-III, Facteurs.
3) Sonde	2 sondes.
Sonde d''échantillonnage
avec fonction de capteur de liquide.
Sonde réactive	avec fonction de capteur de liquide et fonction de chauffage instantané.
4) Cuvettes	1000 cuvettes/charge, avec chargement continu.
5)TAT	Tests d''urgence à n''importe quel poste.
6) Position de l''échantillon	30 supports d''échantillons interchangeables et extensibles, compatibles avec différents tubes d''échantillons.
7) Position de test	6
8) Position du réactif	16 positions à 16℃ et contiennent 4 positions d''agitation.
9) Position d''incubation	10 positions à 37℃.
10) Imprimante de code-barres externe	non fourni
11) Transmission de données	Communication bidirectionnelle, réseau HIS/LIS.
Caractéristiques
1. Méthodes de coagulation, immunoturbidimétriques et chromogènes. Méthode de coagulation par circuit magnétique double inductif.

2. Soutien PT, APTT, Fbg, TT, D-Dimères, FDP, AT-III, Lupus, Facteurs, Protéine C/S, etc.

3. Chargement continu de 1000 cuvettes

4. Réactifs d''origine, plasma de contrôle, plasma d''étalonnage

5. Positionnement incliné des réactifs, réduction du gaspillage de réactif

6. Fonctionnement autonome, lecteur de carte à puce pour le contrôle des réactifs et des consommables.

7. Position d''urgence ; priorité de soutien en cas d''urgence

9. Dimensions : L*l*H 1020*698*705 mm

10. Poids : 90 kg
', '[]', NULL, '["/uploads/1776564396737-9aa520b11.jpg","/uploads/1776564396745-8100-7.jpg","/uploads/1776564396754-8100-9.jpg","/uploads/1776564396931-about-us01.webp","/uploads/1776564396934-about-us02.webp","/uploads/1776564396936-sf8100.webp","/uploads/1776564396938-SF-8100-1.webp","/uploads/1776564396940-SF-8100-3.webp","/uploads/1776564396941-SF-8100-4.webp","/uploads/1776564396943-SF-8100-5.webp","/uploads/1776564396945-SF-8100-6.webp"]', 'cmo3paj9g0006mvwehiq1afrw', '2026-04-19T02:06:36.967Z', '2026-04-19T02:06:36.967Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo54r2pa0011eth5u9y0z7jn', 'H600', 'h600', 'Horron', '
A professional HbA1c testing device utilizing ion-exchange HPLC, certified by NGSP for traceable, high-precision results. Supporting β-thalassemia A2 detection, ideal for small to medium laboratories

CATEGORIES:
HPLC
Product Model:
H600
INQUIRY
Product Introduction
Test Speed: A1c：2.5 mins，A2/F：5.5 mins;

Test Item: HbA1c, eAG, A2/F (Thalassemia);

Principle: HIGH Pressure ion exchange liquid chromatography (HPLC);

Sample Tray: 15 sample positions, CAL1(QC1)& CAL2(QC2)position, ST;

8 inches LCD colorful touch screen;

Support automatic mixing and cap-piercing;

Support LIS system, external barcode scanner optional;

', '[]', NULL, '["/uploads/1776564698695-1767952806806689.png","/uploads/1776564698710-1768441835456368.png","/uploads/1776564698715-1768441835881874.png"]', 'cmo3pajd20007mvwek3q6n21b', '2026-04-19T02:11:38.734Z', '2026-04-19T02:11:38.734Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo54vqv00013eth5etdmh0sw', 'H900', 'h900', 'Horron', '
Horron H900 electrolyte analyzer is a reliable and efficient device for electrolyte analysis, suitable for any hospital. Delivering results for key ions (K⁺, Na⁺, Cl⁻, Ca²⁺, pH, Li⁺, Mg²⁺, TCO₂) with high precision.

CATEGORIES:
Electrolyte
Product Model:
H900
INQUIRY
Product Introduction
Measuring speed: ≤30s; 

Sample type: Serum, plasma, whole blood and diluted urine; 

Intergrated reagent pack: easy to replace;

Principle: Ion selective electrode(ISE method); 

7" Color touch screen, easy to operate; 

Up to 10,000 test results can be stored; 

Support Primary-tube sample tray/ General sample tray(Optional);', '[]', NULL, '["/uploads/1776564916635-1767952366720949.png","/uploads/1776564916637-1768444686719058.png","/uploads/1776564916640-1768444687207979.png"]', 'cmo3pajfe0008mvwesrpxcjjt', '2026-04-19T02:15:16.668Z', '2026-04-19T03:02:28.623Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo552u390015eth5eeaio3ld', 'F37-12X2 Gel Cards Incubator', 'f37-12x2-gel-cards-incubator', ' Bioridge', '1、 Technical performance
• Blood or lD card incubator holds 2 independent incubation zones.
• Each zone has the capacity of 12 Gel cards with independent temperature control.
• Suitable many types of Gel cards of various manufacturers.
• Digital display makes easily to set up time and keep the temperature.
• Prompt tone is available when reaches a set temperature and the end of period.
• Transparent lid makes more convenient observation of the process.

2、Specification
 
Model	F37-12X2
Capacity	24 Gel cards
Temperature	35℃-55 ℃
Temperature uniformity	≤0.5℃
Temperature stability	≤0.1℃
Temperature accuracy	<0.2℃
Time	1sec-99min59sec
Noise	<65db(A)
Power supply	AC110V/AC220V, 50Hz-60Hz
Consumption	300w
Dimension(L×W×H)	350mm×270mm×142mm
Packing size(L×W×H)	450mm×340mm×200mm
Net weight (No rotor)	7kg
 ', '[]', NULL, '["/uploads/1776565247411-125790.jpg"]', 'cmo3pajja0009mvwe5piii430', '2026-04-19T02:20:47.445Z', '2026-04-19T02:20:47.445Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo5569zs0017eth5uzvvfacd', 'TD4G Gel Card Centrifuge', 'td4g-gel-card-centrifuge', 'Bioridge', 'Detailed introduction

Main Technical Parameters

1. Microcomputer-controlled, driven by a DC brushless motor, offering stable operation, low noise, and high speed accuracy.

2. Touch panel for convenient and quick real-time conversion and setting between RPM and RCF.

3. LCD display with a user-friendly interface, simple and convenient operation.

4. Equipped with an electronic door lock, it features multiple protection functions such as door cover protection and overspeed protection; it also has an automatic fault alarm function, ensuring safety and reliability.

5. The standardized procedures for blood type testing and blood serum analysis make clinical experiments and tests more standardized and regulated.

6. Uses an integral sealing ring made of food-grade silicone rubber, compliant with GMP certification. The centrifuge has obtained U.S. FDA certification.

 

Host Technical Parameters

Model

TD4G

TD4G

Order number

2011010200

2011011200

Micro-residence gel card count (6) linked columns

12 cards

24 cards

Maximum rotational speed

2200r/min

2000r/min

Maximum relative centrifugal force

540×g

540×g

Rotational speed accuracy

±30 rpm

±30 rpm

Time setting range

1 min to 99 min 59 sec

1 min to 99 min 59 sec

Overall machine noise

<60 dB(A)

<60 dB(A)

Power supply

AC 220V 50Hz

AC 220V 50Hz

Overall machine power

300W

300W

External dimensions (L×W×H)

330mm × 420mm × 280mm

410mm × 490mm × 310mm

Outer packaging dimensions (L × W × H)

430mm × 520mm × 390mm

500mm × 580mm × 400mm

Weight

14kg

22kg

*The program can be adjusted according to user requirements.
 

Can be used in conjunction with reagent card incubators.

Reagent card Incubator Application Principle:

The reagent card incubator chamber combines microprocessor technology with PID control, enabling it to incubate blood typing cards and various other types of reagent cards. It features two independent incubation chambers, each with separate temperature control and timing functions that do not interfere with each other. Each incubation chamber can simultaneously hold up to 12 cards, ensuring fast and efficient sample processing.

 

Main Technical Parameters

l   The LED display allows you to set temperature and time parameters, and features an audible alert when the temperature is reached as well as an audible reminder when the countdown ends.

l   It features two incubation chambers that can be controlled independently, offering enhanced efficiency.

l   The exterior features an ergonomically designed asymmetrical layout for even greater comfort during operation.

l   The transparent machine cover, which allows for easy observation, makes the experimental process crystal clear at a glance.

l   An integral sealing ring made of food-grade silicone rubber, compliant with GMP certification. The centrifuge has obtained U.S. FDA certification.

 

Host Technical Parameters

Model

F37-12×2

Order number

2051001100

Temperature control range

35–55℃

Temperature uniformity

≤ ±0.5℃

Temperature stability

≤ ±0.1℃

Temperature accuracy

<0.2℃

Capacity

12×2 Blood Type Test Cards (6-column, 8-column)

Time setting range

1 second to 99 minutes and 59 seconds

Power supply

AC 220V 50Hz

Overall machine power

300W

External dimensions (L×W×H)

350mm × 270mm × 142mm

Outer packaging dimensions (L × W × H)

450mm × 340mm × 200mm

Weight

7kg

', '[]', NULL, '["/uploads/1776565407989-54a0b9d1-10c5-49ec-959e-58586da4912a.jpg"]', 'cmo3pajja0009mvwe5piii430', '2026-04-19T02:23:28.024Z', '2026-04-19T02:23:28.024Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo55b23n0019eth5ti4s7dmh', 'TD3 Cell Centrifuge', 'td3-cell-centrifuge', 'Bioridge', 'Detailed introduction

Main technical specifications

1. Microcomputer-controlled, driven by a DC brushless motor, offering stable operation, low noise, and high speed accuracy.

2. Touch panel, programmable operation; host operating parameters can be set according to requirements and are automatically stored.

3. Real-time conversion and setting between RPM and RCF for convenient and quick operation.

4. LCD display with a user-friendly interface, making operation simple and convenient.

5, Equipped with an electronic door lock, it features multiple protective functions such as door cover protection and overspeed protection; it also includes an automatic fault alarm function, ensuring safety and reliability.

6. Uses an integral sealing ring made of food-grade silicone rubber, compliant with GMP certification. The centrifuge has obtained U.S. FDA certification.

 

Various image style references:

 

 

 

Host Technical Parameters

Model

TD3

TD3

Order number

2011006201

2011006202

Maximum rotational speed

3000r/min

3000r/min

Maximum relative centrifugal force

730×g

730×g

Rotor capacity

6 × 0.5 ml

12 × 2 ml

Rotational speed accuracy

±30 rpm

±30 rpm

Time setting range

1 second to 99 minutes and 59 seconds

1 second to 99 minutes and 59 seconds

Overall machine noise

<65 dB(A)

<65 dB(A)

Power supply

AC 220V 50Hz

AC 220V 50Hz

Overall machine power

150W

150W

External dimensions (L×W×H)

330mm × 420mm × 280mm

410mm × 490mm × 310mm

Outer packaging dimensions (L × W × H)

430mm × 520mm × 390mm

500mm × 580mm × 400mm

Weight

14kg

22kg

 

TD3 Cell Smear Centrifuge Rotor

Product Name

Model

Capacity

Maximum rotational speed

Maximum relative centrifugal force

Cell smear centrifuge

TD3 LCD

6 × 0.5 ml

3000r/min

730×g

Cell smear centrifuge

TD3 LCD

12 × 2 ml

3000r/min

730×g

 ', '[]', NULL, '["/uploads/1776565631048-b72344d8-85ed-4585-9f20-dc84db09f889.jpg"]', 'cmo3pajja0009mvwe5piii430', '2026-04-19T02:27:11.076Z', '2026-04-19T02:27:11.076Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo55g7qe001beth5j5j0zidd', 'TD5G Low-Speed Centrifuge', 'td5g-low-speed-centrifuge', 'Bioridge', 'Detailed introduction

Main Technical Parameters

1. Beautiful and elegant design, featuring an ABS shell for long service life and easy cleaning.

2. To ensure user safety, a door cover protection switch is installed.

3. Possesses the quiet and smooth operational performance characteristic of high-end models.

4. Set the desired speed and duration according to the user’s requirements.

5. The memory function can store the parameters from the last run.

6. Uses an integral sealing ring made of food-grade silicone rubber, compliant with GMP certification. The centrifuge has obtained U.S. FDA certification.

 

Host Technical Parameters

Model

TD5G

Order number

2011019100

Maximum rotational speed

4000r/min

Maximum relative centrifugal force

1790×g

Maximum capacity

6 × 15 ml

Rotational speed accuracy

±30 rpm

Time setting range

1 min to 60 min

Overall machine noise

<60 dB(A)

Power supply

AC 220V 50Hz

Overall machine power

100W

External dimensions (L×W×H)

270mm × 270mm × 240mm

Outer packaging dimensions (L × W × H)

320mm × 320mm × 280mm

Weight

5kg

 

TD5G Low-Speed Centrifuge Rotor

Product Name

Model

Capacity

Maximum rotational speed

Maximum relative centrifugal force

Low-speed centrifuge

TD5G digital display

15 ml × 6

4000r/min

1790×g

 ', '[]', NULL, '["/uploads/1776565871612-2652be50-d58e-4879-ada3-2daf6daf5cbf.jpg"]', 'cmo3pajja0009mvwe5piii430', '2026-04-19T02:31:11.654Z', '2026-04-19T02:31:11.654Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo55l3ro001deth5sqjmxbn6', 'TD5M Multi-Tube Rack Automatic Balancing Centrifuge', 'td5m-multi-tube-rack-automatic-balancing-centrifuge', 'Bioridge', 'Detailed introduction

Main Technical Parameters

1. Microcomputer-controlled, driven by a high-torque AC variable-frequency motor, offering stable operation, low noise, and high speed accuracy.
2. Touch panel with programmable and storage capabilities for frequently used user programs, allowing users to easily access them at any time.
3. LCD screen display, user-friendly interface, simple and convenient operation.
4. Real-time conversion and setting of RPM/RCF readings—convenient and quick.
5. Equipped with an electronic door lock, it features multiple protection functions such as door cover protection and overspeed protection; it also has an automatic fault alarm function, ensuring safety and reliability.
6. Uses an integral sealing ring made of food-grade silicone rubber, compliant with GMP certification; the centrifuge has obtained U.S. FDA certification.

 

Host Technical Parameters

Model

TD5M

Order number

2011022200

Maximum rotational speed

5000r/min

Maximum relative centrifugal force

5030×g

Rotor capacity

4 × 500 ml

Rotational speed accuracy

±10 rpm

Time setting range

1 second to 99 minutes and 59 seconds

Overall machine noise

<65 dB(A)

Power supply

AC 220V 50Hz

Overall machine power

750W

External dimensions (L×W×H)

460mm × 540mm × 340mm

Outer packaging dimensions (L×W×H)

550mm × 630mm × 430mm

Weight

31kg

 

TD5M Multi-Tube Rack Automatic Balancing Centrifuge Rotor

Product Name

Model and Capacity

Maximum rotational speed

Maximum relative centrifugal force

Note

Low-speed centrifuge

TD5M LCD

5000r/min

5030×g

 

No. 1 Horizontal Rotor

4 × 500 ml

4000r/min

3220×g

Round cup

No. 1 Horizontal Rotor

4 × 500 ml (airtight hanging cup)

4000r/min

3220×g

 

Adapter

4 × 18 × 1.5 ml

4000r/min

3040×g

 

Adapter

4 × 19 × 5 ml/7 ml (vacuum tube)

4000r/min

3040×g

 

Adapter

4 × 14 × 10 ml (small cap tubes)

4000r/min

3040×g

 

Adapter

4 × 9 × 15 ml

4000r/min

3040×g

 

Adapter

4 × 7 × 20 ml

4000r/min

3040×g

 

Adapter

4 × 3 × 50 ml

4000r/min

3040×g

 

Adapter

4 × 100 ml

4000r/min

3040×g

 

Adapter

4 × 250 ml

4000r/min

3040×g

 

No. 1 Horizontal Rotor

Four baskets

4000r/min

3040×g

Square hanging basket

Adapter

4 × 25 × 1.5 ml

4000r/min

3040×g

 

Adapter

4 × 28 × 5 ml (vacuum tubes)

4000r/min

3040×g

 

Adapter

4 × 20 × 10 ml (small-cap tubes)

4000r/min

3040×g

 

Adapter

4 × 10 × 15 ml

4000r/min

3040×g

 

Adapter

4×4×50ml

4000r/min

3040×g

 

Adapter

4 × 250 ml

4000r/min

3040×g

 

No. 1 Horizontal Enzyme-Labeling Rotor

4 × 2 × 96

4000r/min

3040×g

 

No. 1 Horizontal Rotor

4 × 24 × 7 ml

4000r/min

3040×g

 

No. 1 Horizontal Rotor

5ml/7ml × 19 × 4 (vacuum tube)

4000r/min

3040×g

Airtight cup hanger

No. 2 Horizontal Rotor

8 × 50 ml

5000r/min

5030×g

 

Pipe rack No. 3

32/24/16 × 15 ml

4000r/min

3200×g

Purchase rotor assembly separately

No. 3 Horizontal Rotor

4 × 250 ml

4000r/min

3200×g

 

Adapter

4 × 9 × 1.5 ml

4000r/min

3200×g

 

Adapter

4 × 7 × 5 ml

4000r/min

3200×g

 

Adapter

4 × 9 × 5 ml/7 ml (vacuum tube)

4000r/min

3200×g

 

Adapter

4 × 7 × 10 ml (small-cap tubes)

4000r/min

3200×g

 

Adapter

4 × 5 × 15 ml

4000r/min

3200×g

 

Adapter

4×4×20ml

4000r/min

3200×g

 

Adapter

4 × 50 ml

4000r/min

3200×g

 

Adapter

4 × 100 ml

4000r/min

3200×g

 

No. 3 Horizontal Rotor

72 × 7 ml

4000r/min

3200×g

 

No. 3 Horizontal Rotor

U-shaped hanging basket

4000r/min

3200×g

Includes one set of suspended basket

Hanging basket No. 3

4 × 12 × 7 ml

4000r/min

3200×g

 

Hanging basket

4×6×15 ml

4000r/min

3200×g

 

Hanging basket

4 × 9 × 15 ml

4000r/min

3200×g

 

Hanging basket

4 × 2 × 50 ml

4000r/min

3200×g

 

Hanging basket

4 × 50 ml

4000r/min

3200×g

 

Hanging basket

4 × 100 ml

4000r/min

3200×g

 

No. 4 Horizontal Enzyme-Labeling Rotor

2×2×96

4000r/min

2200×g
', '[]', NULL, '["/uploads/1776566099755-d0aef8dc-da16-4065-a7b9-3150a09d9324.jpg"]', 'cmo3pajja0009mvwe5piii430', '2026-04-19T02:34:59.797Z', '2026-04-19T02:34:59.797Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo55u4h5001feth57wotzv01', 'Single Channel Pipettes, Adjustable Volume, PIPE-T', 'single-channel-pipettes-adjustable-volume-pipe-t', 'Infitek', 'Description
Pipettes
Precision Laboratory Pipettes for Life Science Research
Pipettes cover a volume range from 0.1μL to 10mL.
Ergonomic design provides excellent operating experience.
Large display window allows for easy volume identification.
Easy calibration and maintenance.
8 and 12 channel pipettes are appropriate for 96 well plates.
Dispensing head rotates for effortless pipetting convenience.
Individual piston and tip cone assemblies allowing easy repair and maintenance.
Compound material-made tip cone secures high sealing performance.
Compatible with most universal tip brands.
SPECIFICATIONS

PIPE-T     Single-channel Adjustable Volume Pipettes
Volume Range	Increment	Test Volume	(Accuracy error)	(Precision error)
%	μL	%	μL
0.1-2.5μL	0.05μL	2.5μL	2.50	0.0625	2.00	0.05
1.25μL	3.00	0.0375	3.00	0.0375
0.25μL	12.00	0.03	6.00	0.015
0.5-10μL	0.1μL	10μL	1.00	0.1	0.80	0.08
5μL	1.50	0.075	1.50	0.075
1μL	2.50	0.025	1.50	0.015
2-20μL	0.5μL	20μL	0.90	0.18	0.40	0.08
10μL	1.20	0.12	1.00	0.1
2μL	3.00	0.06	2.00	0.04
5-50μL	0.5μL	50μL	0.60	0.3	0.30	0.15
25μL	0.90	0.225	0.60	0.15
5μL	2.00	0.1	2.00	0.1
10-100μL	1μL	100μL	0.80	0.8	0.15	0.15
50μL	1.00	0.5	0.40	0.2
10μL	3.00	0.3	1.50	0.15
20-200μL	1μL	200μL	0.60	1.2	0.15	0.3
100μL	0.80	0.8	0.30	0.3
20μL	3.00	0.6	1.00	0.2
50-200μL	1μL	200μL	0.60	1.2	0.15	0.3
100μL	0.80	0.8	0.30	0.3
50μL	1.00	0.5	0.40	0.2
100-1000μL	5μL	1000μL	0.60	6	0.20	2
500μL	0.70	3.5	0.25	1.25
100μL	2.00	2	0.70	0.7
200-1000μL	5μL	1000μL	0.60	6	0.20	2
500μL	0.70	3.5	0.25	1.25
200μL	0.90	1.8	0.30	0.6
500-5000μL	50μL	5000μL	0.50	25	0.15	7.5
2500μL	0.60	15	0.30	7.5
1000μL	0.70	3.5	0.30	1.5
1-10mL	0.1mL	10mL	0.60	60	0.20	20
5mL	1.20	60	0.30	15
1mL	3.00	30	0.60	6', '[]', NULL, '["/uploads/1776566520577-PIPE-T-Single-Channel-Pipettes-1.jpg","/uploads/1776566520579-PIPE-T-Single-Channel-Pipettes-2.jpg"]', 'cmo3pajly000amvweiy0l36fi', '2026-04-19T02:42:00.618Z', '2026-04-19T02:42:00.618Z');
INSERT INTO "public"."Product" ("id", "name", "slug", "brand", "technicalDescription", "specifications", "pdfFile", "images", "categoryId", "createdAt", "updatedAt") VALUES ('cmo55x6je001heth5gcz4n1c8', 'Vortex Mixer, Lab Mini Economic, VMX-E', 'vortex-mixer-lab-mini-economic-vmx-e', 'Infitek', 'Description
Vortexer
For small amount of sample mix
Touch operation
Fixed speed: 3000rpm
Small and beautiful
DC brushless motor, stable performance
Specifications	VMX-E
Power supply [VAC]	100-240
Frequency [Hz]	50/60
Power [W]	12
Mixing motion	Orbital
Revolving diameter [mm]	4.8
Motor rating output[W]	10
Rotational speed [rpm]	3000
Operating mode	Inching
External dimension [mm]	133×133×80
Dimension of packing box [mm]	330*220*180
Weight [kg]	1
Gross Weight [kg]	1.4
Allowable environment temperature [°C]	5-40
Permissible Ambient Temperature	≤80%RH
Protection class	IP21', '[]', NULL, '["/uploads/1776566663219-VMX-E-Vortex-Mixer.jpg"]', 'cmo3pajly000amvweiy0l36fi', '2026-04-19T02:44:23.258Z', '2026-04-19T02:44:23.258Z');

-- QuoteRequests
INSERT INTO "public"."QuoteRequest" ("id", "customerName", "email", "phone", "message", "status", "productId", "createdAt", "updatedAt") VALUES ('cmo3odw6p00032c46fiuyl56f', 'a', 'a@gmail.com', 'a', 'a', 'pending', NULL, '2026-04-18T01:45:43.653Z', '2026-04-18T01:49:31.628Z');
INSERT INTO "public"."QuoteRequest" ("id", "customerName", "email", "phone", "message", "status", "productId", "createdAt", "updatedAt") VALUES ('cmo5ad4b2002peth5copt4bzn', '4', '4@jh', '4', 'gtt', 'pending', 'cmo54ctfs000xeth5v75drq4m', '2026-04-19T04:48:45.326Z', '2026-04-19T04:48:45.326Z');

-- SiteSettings
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3nvgx40000e7jifw50pxxf', 'contact_email', 'contact@diagnostica-plus.com', 'string', '2026-04-18T01:31:24.136Z', '2026-04-19T04:45:34.955Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3nvh2f0001e7jiinsiu6hb', 'contact_phone', '+216 31 404 776 / Fax : +216 32 404 776', 'string', '2026-04-18T01:31:24.327Z', '2026-04-19T04:45:35.136Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3nvh620002e7jidqv8smey', 'about_us', 'Diagnostica is a leading provider of medical and laboratory equipment, ensuring accuracy, efficiency, and reliability in healthcare.', 'text', '2026-04-18T01:31:24.459Z', '2026-04-19T04:45:34.175Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sblth0002m4mdk25gfku1', 'contact_address', '123 Lab Street', 'string', '2026-04-18T03:35:55.445Z', '2026-04-19T04:45:34.836Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sblvx0003m4md6dsn4391', 'contact_hours', 'Mon - Fri: 8:00 AM – 6:00 PM', 'string', '2026-04-18T03:35:55.533Z', '2026-04-19T04:45:35.040Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sblyr0004m4mdfye0anag', 'about_title', 'About Diagnostica', 'string', '2026-04-18T03:35:55.635Z', '2026-04-19T04:45:34.050Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbm0q0005m4mdykercl47', 'about_subtitle', 'Your trusted partner in medical laboratory excellence', 'string', '2026-04-18T03:35:55.707Z', '2026-04-19T04:45:33.942Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbm3i0006m4mdbe6coobd', 'about_content', 'Diagnostica is a leading provider of medical and laboratory equipment, ensuring accuracy, efficiency, and reliability in healthcare. We partner with world-renowned manufacturers to deliver cutting-edge diagnostic solutions to laboratories across Algeria and beyond.', 'text', '2026-04-18T03:35:55.806Z', '2026-04-19T04:45:33.733Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbm5r0007m4mdhjo3ffcx', 'about_mission', 'Our mission is to support healthcare professionals with reliable, state-of-the-art diagnostic equipment and outstanding after-sales service.', 'text', '2026-04-18T03:35:55.888Z', '2026-04-19T04:45:33.840Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbm7t0008m4md6j5733zr', 'about_vision', 'To be the leading medical equipment distributor in North Africa, bridging the gap between global innovation and local healthcare needs.', 'text', '2026-04-18T03:35:55.961Z', '2026-04-19T04:45:34.259Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbmag0009m4mdm9nys0jf', 'company_name', 'Diagnostica', 'string', '2026-04-18T03:35:56.056Z', '2026-04-19T04:45:34.721Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbmct000am4md57fyoawl', 'company_founded', '2010', 'string', '2026-04-18T03:35:56.142Z', '2026-04-19T04:45:34.502Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbmhj000bm4mdnlcme8l3', 'company_clients', '500+', 'string', '2026-04-18T03:35:56.311Z', '2026-04-19T04:45:34.417Z');
INSERT INTO "public"."SiteSetting" ("id", "key", "value", "type", "createdAt", "updatedAt") VALUES ('cmo3sbmke000cm4md1afvvz0k', 'company_brands', '30+', 'string', '2026-04-18T03:35:56.415Z', '2026-04-19T04:45:34.331Z');
