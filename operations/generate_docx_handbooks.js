const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageBreak, LevelFormat, PageNumber
} = require('docx');
const fs = require('fs');

// ── shared colors ──
const DARK = "1A3A5C", MID = "2E6DA4", LIGHT = "D6E8F7";
const GOLD = "C8860A", LGOLD = "FFF3CD", GRAY = "F5F5F5", WHITE = "FFFFFF";

const bdr = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const bdrs = { top: bdr, bottom: bdr, left: bdr, right: bdr };
const noBdr = { style: BorderStyle.NONE, size: 0, color: WHITE };
const noBdrs = { top: noBdr, bottom: noBdr, left: noBdr, right: noBdr };

// ── helpers ──
const sp = (n=1) => new Paragraph({ children: [new TextRun("")], spacing: { before: n*80 } });
const pb = () => new Paragraph({ children: [new PageBreak()] });
const run = (text, opts={}) => new TextRun({ text, font: "Arial", size: 22, color: "222222", ...opts });

function para(text, opts={}, runOpts={}) {
  return new Paragraph({ children: [run(text, runOpts)], spacing: { before: 80, after: 80 }, ...opts });
}

function sectionHeader(text, fill=DARK) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, font: "Arial", size: 32, bold: true, color: WHITE })],
    shading: { fill, type: ShadingType.CLEAR },
    spacing: { before: 400, after: 200 },
    indent: { left: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: GOLD } }
  });
}

function subHeader(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun({ text, font: "Arial", size: 26, bold: true, color: DARK })],
    spacing: { before: 280, after: 100 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: MID } }
  });
}

function infoRow(label, value, fillLabel=DARK, fillVal=LIGHT) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [2600, 6760],
    rows: [new TableRow({ children: [
      new TableCell({
        borders: bdrs, width: { size: 2600, type: WidthType.DXA },
        shading: { fill: fillLabel, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: label, font: "Arial", size: 20, bold: true, color: WHITE })], alignment: AlignmentType.CENTER })]
      }),
      new TableCell({
        borders: bdrs, width: { size: 6760, type: WidthType.DXA },
        shading: { fill: fillVal, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 120 },
        children: [new Paragraph({ children: [run(value)] })]
      })
    ]})],
  });
}

function makeCover(title, subtitle, round, color) {
  return [
    sp(10),
    new Paragraph({ children: [new TextRun({ text: "PHYSICS RESEARCH COUNCIL", font: "Arial", size: 44, bold: true, color: DARK })], alignment: AlignmentType.CENTER, spacing: { after: 120 } }),
    new Paragraph({ children: [new TextRun({ text: "National Physics Championship", font: "Arial", size: 30, color: MID, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }),
    new Table({
      width: { size: 9360, type: WidthType.DXA }, columnWidths: [9360],
      rows: [new TableRow({ children: [new TableCell({
        borders: noBdrs, width: { size: 9360, type: WidthType.DXA },
        shading: { fill: color, type: ShadingType.CLEAR },
        margins: { top: 160, bottom: 160, left: 240, right: 240 },
        children: [
          new Paragraph({ children: [new TextRun({ text: title, font: "Arial", size: 40, bold: true, color: WHITE })], alignment: AlignmentType.CENTER }),
          new Paragraph({ children: [new TextRun({ text: subtitle, font: "Arial", size: 26, color: WHITE, italics: true })], alignment: AlignmentType.CENTER })
        ]
      })] })]
    }),
    sp(3),
    new Paragraph({ children: [new TextRun({ text: round, font: "Arial", size: 24, color: "555555" })], alignment: AlignmentType.CENTER }),
    sp(2),
    new Paragraph({ children: [new TextRun({ text: "physicsresearchcouncil@gmail.com  |  @physicsresearchcouncil", font: "Arial", size: 20, color: MID })], alignment: AlignmentType.CENTER }),
    pb()
  ];
}

function makeHeader(label) {
  return new Header({ children: [new Paragraph({
    children: [new TextRun({ text: `Physics Research Council  |  ${label}`, font: "Arial", size: 18, color: "888888" })],
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: MID } }
  })] });
}

function makeFooter() {
  return new Footer({ children: [new Paragraph({
    children: [
      new TextRun({ text: "physicsresearchcouncil@gmail.com          Page ", font: "Arial", size: 18, color: "888888" }),
      new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 18, color: "888888" })
    ],
    border: { top: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" } }
  })] });
}

// ═══════════════════════════════════════════════
// ROUND 1 DATA
// ═══════════════════════════════════════════════
const sections1 = [
  {
    title: "Section 1: Classical Mechanics",
    range: "Questions 1 – 18",
    questions: [
      { n:1, q:"A stone is dropped from height H. If air resistance is negligible, what is the ratio of distances traveled in the 1st, 2nd, and 3rd seconds?", opts:["1 : 1 : 1","1 : 2 : 3","1 : 3 : 5","1 : 4 : 9"], ans:"C", exp:"Galileo's law of odd numbers: distances in successive equal time intervals are in the ratio of consecutive odd numbers (1 : 3 : 5 : 7 …)." },
      { n:2, q:"A block slides down an inclined plane at constant velocity. What is the net force on it?", opts:["Mg sin θ","Mg cos θ","Zero","Mg"], ans:"C", exp:"Constant velocity means zero acceleration. By Newton's First Law, net force = 0." },
      { n:3, q:"An astronaut in an orbiting spacecraft experiences weightlessness. Why?", opts:["No gravitational force acts at that altitude.","The spacecraft is in perpetual free fall toward Earth.","Centrifugal force slightly exceeds gravity.","The thin atmosphere cannot transmit gravity."], ans:"B", exp:"Both the astronaut and spacecraft fall toward Earth at the same rate — a state of continuous free fall — producing weightlessness relative to the craft." },
      { n:4, q:"A ball of mass m collides elastically head-on with a stationary ball of mass 3m. What fraction of the initial KE is transferred to the heavier ball?", opts:["0.25","0.50","0.75","1.00"], ans:"C", exp:"Elastic collision gives v₂ = 2m·u/(4m) = u/2. KE transferred = ½(3m)(u/2)² = 3mu²/8 = 0.75 × initial KE (½mu²)." },
      { n:5, q:"A solid sphere and a hollow sphere (same mass, same radius) roll without slipping down an incline. Which has greater rotational KE at the bottom?", opts:["The solid sphere","The hollow sphere","They are equal","Depends on incline length"], ans:"B", exp:"The hollow sphere has a larger moment of inertia and therefore allocates a greater fraction of total mechanical energy to rotation." },
      { n:6, q:"What is the dimension of the universal gravitational constant G?", opts:["[M⁻¹ L³ T⁻²]","[M L² T⁻²]","[M⁻² L³ T⁻¹]","[M⁻¹ L² T⁻³]"], ans:"A", exp:"From F = Gm₁m₂/r², G = Fr²/(m₁m₂). Substituting: [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]." },
      { n:7, q:"A car negotiates a flat circular curve of radius R. Coefficient of static friction is μ. What is the maximum speed before skidding?", opts:["√(μgR)","μgR","√(gR/μ)","μR/g"], ans:"A", exp:"Friction provides centripetal force: mv²/R = μmg → v = √(μgR)." },
      { n:8, q:"A spring of constant k is cut into two equal halves. What is the constant of each half?", opts:["k/2","k","2k","4k"], ans:"C", exp:"Spring stiffness is inversely proportional to length. Halving length doubles the spring constant." },
      { n:9, q:"A uniform rod (length L, mass M) is pivoted at one end. What is its moment of inertia about the pivot?", opts:["(1/12)ML²","(1/3)ML²","(1/2)ML²","(2/5)ML²"], ans:"B", exp:"I_cm = (1/12)ML². Parallel axis theorem: (1/12)ML² + M(L/2)² = (1/3)ML²." },
      { n:10, q:"If Earth–Sun distance were halved, how many days would there be in a year?", opts:["182.5 days","129 days","91 days","45 days"], ans:"B", exp:"Kepler's Third Law: T² ∝ R³. T₂ = 365/(2√2) ≈ 129 days." },
      { n:11, q:"An object is thrown upward with speed v. What is its speed at half of maximum height?", opts:["v/2","v/√2","v√3/2","v/4"], ans:"B", exp:"Max height H = v²/(2g). At h = H/2: v_f² = v² − v²/2 = v²/2 → v_f = v/√2." },
      { n:12, q:"A bucket of water is swung in a vertical circle of radius R. Minimum speed at the top so no water spills?", opts:["√(gR)","gR","√(2gR)","Zero"], ans:"A", exp:"At the top, centripetal condition requires v²/R ≥ g → v_min = √(gR)." },
      { n:13, q:"Which of the following is a non-conservative force?", opts:["Gravitational force","Electrostatic force","Elastic spring force","Viscous drag force"], ans:"D", exp:"Viscous drag dissipates mechanical energy as heat; work done depends on path." },
      { n:14, q:"A spinning disc (angular velocity ω) has an identical disc placed gently on top. Final angular velocity?", opts:["ω/4","ω/2","ω","2ω"], ans:"B", exp:"Conservation of angular momentum: I·ω = 2I·ω_f → ω_f = ω/2." },
      { n:15, q:"Acceleration due to gravity at depth R/2 inside Earth (R = Earth's radius)?", opts:["g/4","g/2","2g","Zero"], ans:"B", exp:"Inside Earth, g varies linearly: g(d) = g(1 − d/R). At d = R/2: g/2." },
      { n:16, q:"A simple pendulum has period T on Earth. What is its period on the Moon (g_moon = g/6)?", opts:["T/√6","T√6","6T","T/6"], ans:"B", exp:"T = 2π√(L/g). Replacing g with g/6 multiplies T by √6." },
      { n:17, q:"A block (mass m) is pressed against a vertical wall by horizontal force F. Coefficient of static friction = μ. Minimum F to prevent sliding?", opts:["mg","mg/μ","μmg","mgμ"], ans:"B", exp:"N = F, friction = μF. For no sliding: μF = mg → F = mg/μ." },
      { n:18, q:"A bullet (mass m, speed v) embeds in a suspended block (mass M, string length L). Velocity of combined mass just after collision?", opts:["v","mv/(m+M)","Mv/(m+M)","mv/M"], ans:"B", exp:"Conservation of momentum: mv = (m+M)v_f → v_f = mv/(m+M)." },
    ]
  },
  {
    title: "Section 2: Electromagnetism",
    range: "Questions 19 – 32",
    questions: [
      { n:19, q:"Two charges +q and −q are separated by distance d. Electric potential at the midpoint?", opts:["q/(2πε₀d)","q/(4πε₀d)","Zero","2q/(πε₀d)"], ans:"C", exp:"Potentials from +q and −q at the midpoint are equal in magnitude and opposite in sign — they cancel to zero." },
      { n:20, q:"A charged capacitor is disconnected from a battery and the plate separation is doubled. What happens to stored energy?", opts:["Halved","Unchanged","Doubled","Quadrupled"], ans:"C", exp:"Q is fixed. C ∝ 1/d, so C halves. U = Q²/(2C) → U doubles." },
      { n:21, q:"Equivalent resistance between opposite corners of a square wire loop of total resistance R?", opts:["R","R/2","R/4","R/8"], ans:"C", exp:"Each path (two sides) has resistance R/2. Two R/2 paths in parallel: R/4." },
      { n:22, q:"A proton moves in the +x direction into a magnetic field in the +z direction. Which way is the initial magnetic force?", opts:["+ y-axis","− y-axis","+ z-axis","− x-axis"], ans:"B", exp:"F = q(v × B). x̂ × ẑ = −ŷ, so force is in the −y direction." },
      { n:23, q:"A long solenoid has n turns per unit length carrying current I. Field inside near center?", opts:["μ₀nI/2","μ₀nI","2μ₀nI","Zero"], ans:"B", exp:"Ampere's law for an ideal solenoid gives B = μ₀nI." },
      { n:24, q:"Which Maxwell equation implies magnetic monopoles do not exist?", opts:["Gauss's Law for Electricity","Gauss's Law for Magnetism","Faraday's Law","Ampere–Maxwell Law"], ans:"B", exp:"∇·B = 0 means net magnetic flux through any closed surface is zero — no monopoles." },
      { n:25, q:"A flat loop (area A, resistance R) rotates in field B at f revolutions per second. Maximum induced current?", opts:["2πfBA/R","fBA/R","BA/(Rf)","Zero"], ans:"A", exp:"Max emf = BAω = 2πfBA. Max current = 2πfBA/R." },
      { n:26, q:"A capacitor C and inductor L form a closed loop; capacitor initially charged. Frequency of oscillation?", opts:["1/(2πLC)","1/(2π√(LC))","√(LC)/(2π)","2π√(LC)"], ans:"B", exp:"LC oscillator: ω = 1/√(LC), so f = 1/(2π√(LC))." },
      { n:27, q:"What happens to a real battery's terminal voltage when current drawn increases?", opts:["Increases","Stays constant","Decreases","Drops to zero instantly"], ans:"C", exp:"V = E − Ir. Larger I → smaller terminal voltage." },
      { n:28, q:"Electric field at distance r outside an infinite wire with linear charge density λ?", opts:["λ/(2πε₀r)","λ/(4πε₀r²)","λr/(2πε₀)","Zero"], ans:"A", exp:"Gauss's law with cylindrical surface: E = λ/(2πε₀r)." },
      { n:29, q:"A dielectric slab is inserted into a capacitor still connected to a battery. What happens to capacitance and charge?", opts:["Both increase","C increases, Q decreases","C decreases, Q increases","Both unchanged"], ans:"A", exp:"Dielectric raises C. With V fixed (battery connected), Q = CV → Q also increases." },
      { n:30, q:"Two parallel wires carry currents in opposite directions. How do they interact?", opts:["Attract","Repel","No force","Rotate"], ans:"B", exp:"By Lorentz force and the right-hand rule, opposite currents → repulsion." },
      { n:31, q:"Phase difference between current and voltage in a purely capacitive AC circuit?", opts:["Current leads voltage by 90°","Voltage leads current by 90°","In phase","Current leads by 180°"], ans:"A", exp:"In a capacitor, I ∝ dV/dt. Under sinusoidal conditions, current leads voltage by 90°." },
      { n:32, q:"A copper ring falls horizontally into an upward-pointing magnetic field. Direction of magnetic force on the ring?", opts:["Downward","Upward","Horizontally left","Zero"], ans:"B", exp:"Lenz's law: induced current opposes change in flux → upward braking force." },
    ]
  },
  {
    title: "Section 3: Thermodynamics",
    range: "Questions 33 – 40",
    questions: [
      { n:33, q:"An ideal gas undergoes free expansion into a vacuum in an insulated container. Changes in T and S?", opts:["dT=0, dS=0","dT>0, dS>0","dT=0, dS>0","dT<0, dS>0"], ans:"C", exp:"W=0, Q=0 → dU=0 → dT=0 for ideal gas. Process is irreversible → dS>0." },
      { n:34, q:"Average translational kinetic energy of one molecule in an ideal gas at temperature T?", opts:["½kT","³⁄₂kT","kT","⁵⁄₂kT"], ans:"B", exp:"Equipartition: each of 3 translational degrees contributes ½kT → total = ³⁄₂kT." },
      { n:35, q:"Ideal gas: pressure doubled, volume halved. What happens to absolute temperature?", opts:["Doubled","Halved","Unchanged","Quadrupled"], ans:"C", exp:"PV = nRT. (2P)(V/2) = PV → T unchanged." },
      { n:36, q:"Under what conditions does a real gas behave most like an ideal gas?", opts:["High P, low T","Low P, high T","Low P, low T","High P, high T"], ans:"B", exp:"Low P: molecules far apart (volume negligible). High T: KE overcomes intermolecular attractions." },
      { n:37, q:"Which process is strictly reversible?", opts:["Heat transfer across finite ΔT","Frictionless quasi-static expansion","Free expansion of ideal gas","Joule–Thomson expansion"], ans:"B", exp:"Reversible requires quasi-static process with no dissipative forces (e.g., no friction)." },
      { n:38, q:"Change in entropy during a complete reversible engine cycle?", opts:["Positive","Negative","Zero","Infinite"], ans:"C", exp:"Entropy is a state function. Net change over a complete cycle returning to the same state = 0." },
      { n:39, q:"A system absorbs 500 J and does 200 J of work on surroundings. Change in internal energy?", opts:["700 J","300 J","−300 J","200 J"], ans:"B", exp:"First Law: ΔU = Q − W = 500 − 200 = 300 J." },
      { n:40, q:"In which process does work done equal the negative change in internal energy?", opts:["Isothermal","Isobaric","Adiabatic","Isochoric"], ans:"C", exp:"Adiabatic: Q=0 → ΔU = −W. Work done by system equals decrease in internal energy." },
    ]
  },
  {
    title: "Section 4: Waves, Optics & Modern Physics",
    range: "Questions 41 – 50",
    questions: [
      { n:41, q:"Light travels from water (n=1.33) to air (n=1.00). Critical angle for total internal reflection?", opts:["arcsin(1.33)","arcsin(0.75)","arcsin(0.50)","TIR cannot occur"], ans:"B", exp:"sin θ_c = n₂/n₁ = 1/1.33 = 0.75 → θ_c = arcsin(0.75)." },
      { n:42, q:"In single-slit diffraction, the slit width is decreased. What happens to the central maximum width?", opts:["Decreases","Unchanged","Increases","Oscillates"], ans:"C", exp:"First minimum at a·sin θ = λ. Smaller a → larger θ → wider central maximum." },
      { n:43, q:"Maximum KE of ejected electrons in photoelectric effect = 4.8×10⁻¹⁹ J. Stopping potential?", opts:["1.5 V","3.0 V","4.8 V","6.0 V"], ans:"B", exp:"V_s = K_max/e = 4.8×10⁻¹⁹ / 1.6×10⁻¹⁹ = 3.0 V." },
      { n:44, q:"Ground-state energy of hydrogen-like He⁺ (Z=2) by Bohr model?", opts:["−13.6 eV","−27.2 eV","−54.4 eV","−3.4 eV"], ans:"C", exp:"E_n = −13.6·Z²/n² eV. For Z=2, n=1: E = −13.6×4 = −54.4 eV." },
      { n:45, q:"Two spaceships each move at 0.6c toward each other (relative to a stationary observer). Relative speed according to one pilot?", opts:["1.20c","0.88c","0.96c","0.75c"], ans:"B", exp:"Relativistic addition: (0.6c+0.6c)/(1+0.36) = 1.2c/1.36 ≈ 0.88c." },
      { n:46, q:"What is the rest mass of a photon?", opts:["hν/c²","Zero","1.67×10⁻²⁷ kg","Infinite"], ans:"B", exp:"Photons always travel at c and have zero rest mass. Their energy is entirely momentum-based." },
      { n:47, q:"A light source moves away from an observer. How does observed frequency compare to emitted?", opts:["Higher (blue-shifted)","Lower (red-shifted)","Identical","Drops to zero"], ans:"B", exp:"Doppler effect: receding source → longer wavelength → lower frequency (red-shift)." },
      { n:48, q:"Which phenomenon demonstrates the particle nature of light?", opts:["Thin-film interference","Double-slit diffraction","Compton scattering","Polarization"], ans:"C", exp:"Compton scattering shows photon–electron momentum exchange — only explainable by treating light as particles." },
      { n:49, q:"A radioactive sample (half-life 4 days) starts with activity A₀. Activity after 12 days?", opts:["A₀/3","A₀/8","A₀/16","A₀/64"], ans:"B", exp:"n = 12/4 = 3 half-lives. A = A₀×(1/2)³ = A₀/8." },
      { n:50, q:"Which principle states that position and momentum of a particle cannot both be precisely measured simultaneously?", opts:["Pauli Exclusion Principle","Heisenberg Uncertainty Principle","De Broglie Hypothesis","Schrödinger Wave Equation"], ans:"B", exp:"Heisenberg Uncertainty Principle: Δx·Δp ≥ ℏ/2." },
    ]
  }
];

// ── build Round 1 question blocks ──
function buildQ1(q) {
  const optLabels = ["(A)", "(B)", "(C)", "(D)"];
  return [
    new Paragraph({
      children: [
        new TextRun({ text: `Q${q.n}.  `, font: "Arial", size: 23, bold: true, color: DARK }),
        new TextRun({ text: q.q, font: "Arial", size: 22, color: "222222" })
      ],
      spacing: { before: 240, after: 80 }
    }),
    ...q.opts.map((o, i) => new Paragraph({
      children: [
        new TextRun({ text: `  ${optLabels[i]}  `, font: "Arial", size: 21, bold: true, color: MID }),
        new TextRun({ text: o, font: "Arial", size: 21, color: "333333" })
      ],
      spacing: { before: 40, after: 40 }, indent: { left: 360 }
    }))
  ];
}

function buildAns1(q) {
  return new Table({
    width: { size: 9360, type: WidthType.DXA }, columnWidths: [1400, 7960],
    rows: [new TableRow({ children: [
      new TableCell({
        borders: bdrs, width: { size: 1400, type: WidthType.DXA },
        shading: { fill: "1A5C2A", type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 100, right: 100 },
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ children: [new TextRun({ text: `Ans: (${q.ans})`, font: "Arial", size: 20, bold: true, color: WHITE })], alignment: AlignmentType.CENTER })]
      }),
      new TableCell({
        borders: bdrs, width: { size: 7960, type: WidthType.DXA },
        shading: { fill: "E8F5E9", type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: q.exp, font: "Arial", size: 20, color: "222222" })] })]
      })
    ]})],
  });
}

// ═══════════════════════════════════════════════
// ROUND 3 DATA
// ═══════════════════════════════════════════════
const problems3 = [
  {
    n:1, topic:"Classical Mechanics — Oscillations",
    title:"Liquid Oscillations in a U-Tube",
    problem:"A liquid of density ρ and total length L is placed in a uniform vertical U-tube of cross-sectional area A. The liquid is displaced slightly from equilibrium and released. Prove that it executes SHM and derive the oscillation frequency.",
    solution:[
      "Let the liquid be displaced by x from equilibrium. One arm rises by x, the other drops by x — height difference = 2x.",
      "Restoring force:  F = −(2x · A · ρ) · g",
      "Total liquid mass M = LAρ. Newton's Second Law:",
      "   (LAρ) · ẍ = −2Aρgx",
      "Dividing by Aρ:   L · ẍ = −2gx   →   ẍ + (2g/L)x = 0",
      "This is SHM: ω² = 2g/L.  Therefore:",
      "   ω = √(2g/L)   and   f = (1/2π)√(2g/L)"
    ]
  },
  {
    n:2, topic:"Classical Mechanics — Gravitation",
    title:"Escape Velocity from a Variable-Density Planet",
    problem:"A planet of radius R has density profile ρ(r) = ρ₀(1 − r/R). Derive the escape velocity from its surface.",
    solution:[
      "Total mass by integration:",
      "   M = 4πρ₀ ∫₀ᴿ (r² − r³/R) dr = 4πρ₀ [r³/3 − r⁴/(4R)]₀ᴿ = πρ₀R³/3",
      "Escape condition: ½mv²_e = GMm/R",
      "   v_e = √(2GM/R) = √(2G · πρ₀R³/3 / R)",
      "   v_e = R√(2πGρ₀/3)"
    ]
  },
  {
    n:3, topic:"Classical Mechanics — Lagrangian Mechanics",
    title:"Lagrangian of a Double Pendulum",
    problem:"Two identical bobs (mass m, string length L) form a double pendulum. Derive the Lagrangian in terms of angular coordinates θ₁ and θ₂.",
    solution:[
      "Bob 1 position: x₁ = L sinθ₁,  y₁ = −L cosθ₁",
      "Bob 2 position: x₂ = L sinθ₁ + L sinθ₂,  y₂ = −L cosθ₁ − L cosθ₂",
      "Velocities squared:",
      "   v₁² = L²θ̇₁²",
      "   v₂² = L²[θ̇₁² + θ̇₂² + 2θ̇₁θ̇₂ cos(θ₁ − θ₂)]",
      "Kinetic energy: T = ½m(v₁² + v₂²) = ½mL²[2θ̇₁² + θ̇₂² + 2θ̇₁θ̇₂ cos(θ₁−θ₂)]",
      "Potential energy (ceiling = 0): U = −mgL(2cosθ₁ + cosθ₂)",
      "Lagrangian L = T − U:",
      "   L = ½mL²[2θ̇₁² + θ̇₂² + 2θ̇₁θ̇₂ cos(θ₁−θ₂)] + mgL(2cosθ₁ + cosθ₂)"
    ]
  },
  {
    n:4, topic:"Classical Mechanics — Circular Motion",
    title:"Normal Force on a Cylinder Rolling Inside a Sphere",
    problem:"A cylinder (mass m, radius r) rolls without slipping inside a hollow sphere of radius R, released from rest at θ = 90°. Derive the normal force as a function of θ.",
    solution:[
      "Energy conservation from θ₀ = 90° to angle θ:",
      "   mg(R−r) = (3/4)m(R−r)²θ̇² + mg(R−r)cosθ",
      "Solving:  (R−r)θ̇² = (4g/3)(1 − cosθ)",
      "Radial equation of motion:",
      "   N − mg cosθ = m(R−r)θ̇²",
      "Substituting:",
      "   N = mg cosθ + (4mg/3)(1 − cosθ) = (mg/3)(4 − cosθ)"
    ]
  },
  {
    n:5, topic:"Classical Mechanics — Constrained Systems",
    title:"Acceleration of a Sliding Wedge",
    problem:"A wedge (mass M, frictionless incline angle α) rests on a frictionless table. A block (mass m) slides down the wedge. Derive the wedge's acceleration using Lagrangian mechanics.",
    solution:[
      "Let X = wedge horizontal position, x = block position along incline.",
      "Block coordinates: x_b = X + x cosα,  y_b = −x sinα",
      "Kinetic energy: T = ½(M+m)Ẋ² + ½mẋ² + mẊẋ cosα",
      "Potential energy: U = −mgx sinα",
      "X is cyclic → conserved momentum: (M+m)Ẋ + mẋ cosα = 0 → Ẋ = −(m cosα/(M+m))ẋ",
      "Euler–Lagrange for x: ẍ + Ẍ cosα = g sinα",
      "Substituting and solving gives wedge acceleration A = Ẍ:",
      "   A = −mg sinα cosα / (M + m sin²α)"
    ]
  },
  {
    n:6, topic:"Electrodynamics — Magnetostatics",
    title:"Magnetic Field of a Rotating Charged Sphere",
    problem:"A hollow sphere (radius R, surface charge density σ) rotates at angular velocity ω about its vertical axis. Prove that the magnetic field at the center is B = (2/3)μ₀σRω.",
    solution:[
      "Consider a ring at angle θ from axis, width R dθ.",
      "Charge on ring: dq = σ · 2π(R sinθ)(R dθ) = 2πR²σ sinθ dθ",
      "Ring current: dI = dq · (ω/2π) = R²σω sinθ dθ",
      "Field at center from ring (radius R sinθ):",
      "   dB = μ₀ dI (R sinθ)² / (2R³) = (μ₀σRω/2) sin³θ dθ",
      "Integrating θ from 0 to π: ∫₀^π sin³θ dθ = 4/3",
      "   B = (μ₀σRω/2)(4/3) = (2/3)μ₀σRω  ✓"
    ]
  },
  {
    n:7, topic:"Electrodynamics — Circuit Oscillations",
    title:"Current in a Dual-Capacitor LC Circuit",
    problem:"One capacitor (C, charged to V₀) and one uncharged capacitor (C) are connected through inductor L. Derive I(t).",
    solution:[
      "Let q₂(t) = charge on uncharged capacitor. Total charge Q = CV₀ is conserved: q₁ = CV₀ − q₂.",
      "Kirchhoff's loop: (q₁ − q₂)/C = L·q̈₂",
      "Substituting q₁: q̈₂ + (2/LC)q₂ = V₀/L",
      "Angular frequency: ω = √(2/LC)",
      "With q₂(0) = 0, I(0) = 0:",
      "   q₂(t) = (CV₀/2)(1 − cos ωt)",
      "   I(t) = q̇₂ = (CV₀ω/2) sin ωt = V₀√(C/2L) sin(√(2/LC) · t)"
    ]
  },
  {
    n:8, topic:"Electrodynamics — Magnetostatics",
    title:"Self-Inductance per Unit Length of a Coaxial Cable",
    problem:"A coaxial cable has inner conductor radius a and outer shell radius b. Derive self-inductance per unit length considering only the region a < r < b.",
    solution:[
      "Ampere's law between conductors (a < r < b): B(r) = μ₀I/(2πr)",
      "Energy density: u_B = B²/(2μ₀) = μ₀I²/(8π²r²)",
      "Energy per unit length:",
      "   U = ∫ₐᵇ u_B · 2πr dr = (μ₀I²/4π) ∫ₐᵇ dr/r = (μ₀I²/4π) ln(b/a)",
      "Using U = ½L_ind · I²:",
      "   L_ind = (μ₀/2π) ln(b/a)  per unit length"
    ]
  },
  {
    n:9, topic:"Electrodynamics — Relativistic Forces",
    title:"Magnetic-to-Electric Force Ratio for Moving Charges",
    problem:"Two charges q move parallel along the x-axis at speed v, separated by distance d along y. Derive F_M / F_E.",
    solution:[
      "Coulomb force: F_E = q²/(4πε₀d²)",
      "Magnetic field of first charge at second (Biot–Savart): B = μ₀qv/(4πd²)",
      "Lorentz force on second charge: F_M = qvB = μ₀q²v²/(4πd²)",
      "Ratio: F_M/F_E = μ₀ε₀v²",
      "Since c = 1/√(μ₀ε₀):  F_M/F_E = v²/c²"
    ]
  },
  {
    n:10, topic:"Electrodynamics — Transport",
    title:"Drift Velocity and Current",
    problem:"A conductor (area A, electron density n) carries current I. Derive the relationship between I and average drift velocity v_d.",
    solution:[
      "In a segment of length dx: volume = A·dx, electrons = n·A·dx",
      "Charge: dq = e·n·A·dx",
      "Current = dq/dt = e·n·A·(dx/dt)",
      "Since dx/dt = v_d:",
      "   I = neAv_d"
    ]
  },
  {
    n:11, topic:"Thermodynamics — Engine Cycles",
    title:"Efficiency of the Stirling Engine",
    problem:"A Stirling engine uses an ideal gas cycling between T_H and T_C with volumes V₁ and V₂. Assume perfect heat regeneration. Derive the efficiency.",
    solution:[
      "Heat absorbed in isothermal expansion at T_H: Q_in = nRT_H ln(V₂/V₁)",
      "Heat rejected in isothermal compression at T_C: Q_out = nRT_C ln(V₂/V₁)",
      "Perfect regeneration: isochoric heat exchange is internal — no net external heat.",
      "Efficiency: η = (Q_in − Q_out)/Q_in = (T_H − T_C)/T_H = 1 − T_C/T_H",
      "This equals the Carnot efficiency, as expected for a reversible cycle."
    ]
  },
  {
    n:12, topic:"Thermodynamics — Statistical Mechanics",
    title:"Entropy Change on Mixing Two Ideal Gases",
    problem:"Two chambers (volume V each) contain n moles of different ideal gases at temperature T. The partition is removed. Derive total entropy change.",
    solution:[
      "Since the gases are different, mixing is irreversible.",
      "Each gas expands from V to 2V isothermally.",
      "Entropy change per gas: ΔS = nR ln(2V/V) = nR ln 2",
      "Both gases expand independently:",
      "   ΔS_total = 2nR ln 2"
    ]
  },
  {
    n:13, topic:"Thermodynamics — Statistical Mechanics",
    title:"Partition Function of a Two-State System",
    problem:"N independent particles each have two states: energy 0 (ground) and energy E (excited). Derive partition function Z and total average energy at temperature T.",
    solution:[
      "Single-particle partition function: Z = e⁰ + e^(−E/kT) = 1 + e^(−βE)  (where β = 1/kT)",
      "Average single-particle energy: U = −∂(lnZ)/∂β = Ee^(−βE)/(1 + e^(−βE))",
      "Simplifying: U = E/(e^(βE) + 1)",
      "Total average energy for N particles:",
      "   U_total = NE/(e^(E/kT) + 1)"
    ]
  },
  {
    n:14, topic:"Thermodynamics — Real Gases",
    title:"Joule–Thomson Coefficient for an Ideal Gas",
    problem:"Prove that the Joule–Thomson coefficient μ_JT = (∂T/∂P)_H is zero for an ideal gas.",
    solution:[
      "Cyclic relation: (∂T/∂P)_H = −(∂H/∂P)_T / (∂H/∂T)_P = −(∂H/∂P)_T / C_P",
      "From dH = TdS + VdP and Maxwell relation (∂S/∂P)_T = −(∂V/∂T)_P:",
      "   (∂H/∂P)_T = V − T(∂V/∂T)_P",
      "For ideal gas, V = nRT/P → T(∂V/∂T)_P = nR/P · T = V",
      "   (∂H/∂P)_T = V − V = 0",
      "   μ_JT = 0  ✓"
    ]
  },
  {
    n:15, topic:"Waves & Optics",
    title:"Thin Film Interference at Oblique Incidence",
    problem:"Light (wavelength λ) hits a thin film (index n, thickness d) at angle θ. Derive the condition for constructive interference of reflected light.",
    solution:[
      "Path difference between reflections off top and bottom surfaces:",
      "   Δp = 2nd cosθ_r   (θ_r = refraction angle inside film)",
      "Snell's law: sin θ = n sin θ_r → cos θ_r = √(1 − sin²θ/n²)",
      "Top reflection (air → film) has π phase shift; bottom (film → air) does not.",
      "Net effective path difference shifts constructive condition:",
      "   2nd cosθ_r = (m + ½)λ",
      "   2d√(n² − sin²θ) = (m + ½)λ,   m = 0, 1, 2, …"
    ]
  },
  {
    n:16, topic:"Waves & Optics",
    title:"Resolving Power of a Diffraction Grating",
    problem:"Prove that the chromatic resolving power of a grating with N lines in order m is R = λ/dλ = mN.",
    solution:[
      "Principal maximum condition: d sinθ = mλ",
      "First adjacent minimum position: d sinθ = mλ + λ/N → angular width Δθ = λ/(Nd cosθ)",
      "Rayleigh criterion: two wavelengths are resolved when their principal maxima are separated by at least Δθ.",
      "Differentiating grating equation: dθ/dλ = m/(d cosθ)",
      "Required: (dθ/dλ)·dλ ≥ Δθ",
      "   (m/(d cosθ))·dλ ≥ λ/(Nd cosθ)",
      "   R = λ/dλ = mN  ✓"
    ]
  },
  {
    n:17, topic:"Special Relativity",
    title:"Relativistic Doppler Effect",
    problem:"A light source moves directly away from a stationary observer at speed v. Derive observed frequency f in terms of emitted frequency f₀.",
    solution:[
      "Proper period T₀ = 1/f₀. Due to time dilation, period in observer's frame:",
      "   T_e = γT₀ = T₀/√(1 − v²/c²)",
      "During T_e, source moves d = vT_e further away. Extra travel time for crest: Δt = d/c",
      "Total observed period:",
      "   T = T_e(1 + v/c) = T₀(1 + v/c)/√(1 − v²/c²) = T₀√((1+v/c)/(1−v/c))",
      "Taking reciprocal:",
      "   f = f₀√((1 − v/c)/(1 + v/c))"
    ]
  },
  {
    n:18, topic:"Special Relativity",
    title:"Threshold Energy for Pion Production",
    problem:"A moving proton collides with a stationary proton: p + p → p + p + π⁰. Derive the threshold kinetic energy K_th of the incident proton.",
    solution:[
      "Four-momentum invariant s = (p₁ + p₂)²c²:",
      "   s = 2m²c⁴ + 2Emc²",
      "At threshold, all products at rest in CM frame:",
      "   s_th = (2m + m_π)²c⁴ = 4m²c⁴ + 4mm_πc⁴ + m_π²c⁴",
      "Equating: 2Emc² = 2m²c⁴ + 4mm_πc⁴ + m_π²c⁴",
      "   E = mc² + 2m_πc² + m_π²c²/(2m)",
      "Since E = mc² + K_th:",
      "   K_th = 2m_πc²(1 + m_π/(4m))"
    ]
  },
  {
    n:19, topic:"Modern Physics — Quantum Mechanics",
    title:"Bohr–Sommerfeld Quantization of Harmonic Oscillator",
    problem:"Using the rule ∮p dq = nh, derive the energy levels of a 1D harmonic oscillator (mass m, angular frequency ω).",
    solution:[
      "Constant-energy phase-space curve: p²/(2mE) + mω²q²/(2E) = 1  — an ellipse.",
      "Semi-axes: a = √(2E/mω²),  b = √(2mE)",
      "Action = area of ellipse: ∮p dq = πab = π·(2E/ω)",
      "Quantization: 2πE/ω = nh",
      "   E = nℏω  (n = 1, 2, 3, …)"
    ]
  },
  {
    n:20, topic:"Modern Physics — Quantum Mechanics",
    title:"Normalization of the Infinite Square Well Wavefunction",
    problem:"For ψ_n(x) = A sin(nπx/L) in the well 0 ≤ x ≤ L, prove A = √(2/L).",
    solution:[
      "Normalization condition: A² ∫₀ᴸ sin²(nπx/L) dx = 1",
      "Using identity sin²θ = (1 − cos2θ)/2:",
      "   A² ∫₀ᴸ (1 − cos(2nπx/L))/2 dx = A²·L/2",
      "(The cosine term integrates to zero over a full period.)",
      "   A²·L/2 = 1 → A² = 2/L → A = √(2/L)  ✓"
    ]
  }
];

function buildP3(p) {
  const lines = [
    new Paragraph({
      children: [
        new TextRun({ text: `Problem ${p.n}`, font: "Arial", size: 26, bold: true, color: WHITE }),
        new TextRun({ text: `   ${p.topic}`, font: "Arial", size: 21, color: "CCDDEE" })
      ],
      shading: { fill: DARK, type: ShadingType.CLEAR },
      spacing: { before: 360, after: 100 },
      indent: { left: 160 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: GOLD } }
    }),
    new Paragraph({
      children: [new TextRun({ text: p.title, font: "Arial", size: 24, bold: true, color: MID })],
      spacing: { before: 100, after: 120 }
    }),
    new Table({
      width: { size: 9360, type: WidthType.DXA }, columnWidths: [9360],
      rows: [new TableRow({ children: [new TableCell({
        borders: { top: { style: BorderStyle.SINGLE, size: 3, color: MID }, bottom: { style: BorderStyle.SINGLE, size: 1, color: MID }, left: { style: BorderStyle.SINGLE, size: 6, color: MID }, right: { style: BorderStyle.SINGLE, size: 1, color: MID } },
        width: { size: 9360, type: WidthType.DXA },
        shading: { fill: LIGHT, type: ShadingType.CLEAR },
        margins: { top: 120, bottom: 120, left: 160, right: 160 },
        children: [new Paragraph({ children: [new TextRun({ text: p.problem, font: "Arial", size: 22, color: "222222" })] })]
      })] })],
    }),
    sp(1),
    new Paragraph({
      children: [new TextRun({ text: "Solution", font: "Arial", size: 22, bold: true, color: "1A5C2A" })],
      spacing: { before: 80, after: 80 }
    }),
    ...p.solution.map(line => new Paragraph({
      children: [new TextRun({ text: line, font: "Arial", size: 21, color: "222222" })],
      spacing: { before: 50, after: 50 }, indent: { left: 360 }
    }))
  ];
  return lines;
}

// ═══════════════════════════════════════════════
// BUILD ROUND 1 DOC
// ═══════════════════════════════════════════════
function buildRound1() {
  const children = [
    ...makeCover(
      "Round 1 — Sample Practice Questions",
      "50 Multiple-Choice Questions with Explanations",
      "Conceptual Quiz | 20 Questions | 20 Minutes | 10 marks/correct | −5 per wrong",
      DARK
    ),
    // Quick reference
    sectionHeader("Quick Reference"),
    sp(1),
    infoRow("Format", "20 MCQs in the actual exam. This handbook has 50 for practice."),
    sp(1),
    infoRow("Scoring", "+10 per correct answer   |   −5 per wrong answer   |   0 for blank"),
    sp(1),
    infoRow("Duration", "20 minutes (timer runs continuously — no pauses)"),
    sp(1),
    infoRow("Aids", "Basic calculator and blank scratch paper permitted"),
    sp(1),
    infoRow("Syllabus", "Mechanics · Electromagnetism · Thermodynamics · Waves & Optics · Modern Physics"),
    sp(2),
    para("Use this handbook to practice under timed conditions. Attempt a section before reading the explanations.", {}, { italics: true, color: "555555" }),
    pb()
  ];

  // Questions (no answers)
  for (const sec of sections1) {
    children.push(sectionHeader(sec.title));
    children.push(para(sec.range, { spacing: { before: 80, after: 200 } }, { italics: true, color: "666666" }));
    for (const q of sec.questions) children.push(...buildQ1(q));
    children.push(pb());
  }

  // Answer key
  children.push(sectionHeader("Answer Key & Explanations", "1A5C2A"));
  children.push(sp(1));
  for (const sec of sections1) {
    children.push(subHeader(sec.title));
    for (const q of sec.questions) {
      children.push(sp(1));
      children.push(buildAns1(q));
    }
    children.push(sp(1));
  }

  return new Document({
    numbering: { config: [] },
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: WHITE },
          paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: DARK },
          paragraph: { spacing: { before: 280, after: 100 }, outlineLevel: 1 } }
      ]
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1260, right: 1260, bottom: 1260, left: 1260 } } },
      headers: { default: makeHeader("Round 1 — Conceptual Quiz Practice") },
      footers: { default: makeFooter() },
      children
    }]
  });
}

// ═══════════════════════════════════════════════
// BUILD ROUND 3 DOC
// ═══════════════════════════════════════════════
function buildRound3() {
  const children = [
    ...makeCover(
      "Round 3 — Olympiad Theory Practice",
      "20 Advanced Derivations & Proofs",
      "Handwritten Exam | 3 Hours | 100 Marks | Shortlisted Candidates Only",
      "1A3A5C"
    ),
    sectionHeader("How to Use This Handbook"),
    sp(1),
    infoRow("Attempt first", "Cover the solution and try each problem fully on paper before reading the proof."),
    sp(1),
    infoRow("Show all steps", "In the actual exam, partial credit is awarded for correct reasoning even with a wrong final answer."),
    sp(1),
    infoRow("Formula sheet", "You may bring one double-sided A4 sheet (formulas only — no worked examples)."),
    sp(1),
    infoRow("Submission", "Write solutions by hand → scan all pages into one PDF → upload before deadline."),
    sp(2),
    para("Problems in this handbook reflect the style and difficulty of Round 3. Work through them as you would in the real exam.", {}, { italics: true, color: "555555" }),
    pb()
  ];

  for (const p of problems3) {
    children.push(...buildP3(p));
    children.push(sp(2));
  }

  return new Document({
    numbering: { config: [] },
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: WHITE },
          paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: DARK },
          paragraph: { spacing: { before: 280, after: 100 }, outlineLevel: 1 } }
      ]
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1260, right: 1260, bottom: 1260, left: 1260 } } },
      headers: { default: makeHeader("Round 3 — Olympiad Theory Practice") },
      footers: { default: makeFooter() },
      children
    }]
  });
}

// ── Write both files ──
Promise.all([
  Packer.toBuffer(buildRound1()).then(b => fs.writeFileSync("Round1_Practice_Questions.docx", b)),
  Packer.toBuffer(buildRound3()).then(b => fs.writeFileSync("Round3_Olympiad_Practice.docx", b))
]).then(() => console.log("Done"));
