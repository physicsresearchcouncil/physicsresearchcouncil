# The Physics Championship - Round 3: Olympiad Theory (Sample Problems)

This document contains 3 advanced, multi-part theoretical problems reflecting the level of **Round 3 (Olympiad Theory Challenge)**. These problems require advanced mathematical techniques, including differential equations, calculus-based derivations, and relativistic conservation laws.

---

## Problem 1: Classical Mechanics — Small Oscillations of a Rolling Cylinder
A solid, uniform cylinder of mass $m$ and radius $r$ rolls without slipping along the inner surface of a fixed hollow cylinder of much larger radius $R$. The system is in a uniform gravitational field $g$ directed downwards.

### Questions:
1.  **[5 Marks]** Write the Lagrangian $L$ of the rolling cylinder in terms of the angular position $\theta$ of the cylinder's center of mass relative to the vertical axis.
2.  **[10 Marks]** Apply the Euler-Lagrange equations to find the equation of motion for the cylinder.
3.  **[5 Marks]** Determine the frequency of small oscillations ($\omega_0$) about the stable equilibrium position ($\theta = 0$).

### Solution summary
Distance from hollow center to rolling center: $d = R - r$. Rolling without slipping gives $\dot{\phi} = ((R-r)/r)\dot{\theta}$. Kinetic energy $T = \frac{3}{4}m(R-r)^2\dot{\theta}^2$. Potential $U = mg(R-r)(1-\cos\theta)$. Equation of motion: $\ddot{\theta} + \frac{2g}{3(R-r)}\sin\theta = 0$. Small oscillations: $\omega_0 = \sqrt{\frac{2g}{3(R-r)}}$.

---

## Problem 2: Electrodynamics — Effective Mass of a Capacitor-Linked Rail
A conducting bar of mass $m$ and length $L$ slides frictionlessly along two parallel horizontal conducting rails connected to a capacitor $C$. Uniform magnetic field $\vec{B}$ is perpendicular to the plane. Bar starts with velocity $v_0$.

### Questions:
1.  **[5 Marks]** Relate $v(t)$, induced emf $\mathcal{E}(t)$, and capacitor charge $q(t)$.
2.  **[10 Marks]** Write the differential equation for $v(t)$ using Newton and Lorentz force.
3.  **[5 Marks]** Solve for $v(t)$ and interpret physically.

### Solution summary
$\mathcal{E} = BLv$, $q = CBLv$. Current $I = CBLa$. Retarding force leads to $(m + CB^2L^2)a = 0$, so $v(t) = v_0$ constantly. The capacitor contributes an electromagnetic effective mass $CB^2L^2$; with no resistance, kinetic energy is conserved.

---

## Problem 3: Special Relativity — Symmetric Pion Decay
A neutral pion of rest mass $M$ and energy $E$ decays into two photons emitted symmetrically at angle $\theta$ to the flight direction in the lab frame.

### Questions:
1.  **[5 Marks]** Write energy and momentum conservation in the lab frame.
2.  **[10 Marks]** Find the relation between $\theta$, $M$, and $E$.
3.  **[5 Marks]** Show the minimum separation angle as $E \to \infty$.

### Solution summary
$E_\gamma = E/2$, $pc = E\cos\theta$. From $E^2 - p^2c^2 = M^2c^4$: $\sin\theta = Mc^2/E$. As $E \to \infty$, $\theta \to 0$ (photons collinear forward). At rest ($E = Mc^2$), $\theta = 90^\circ$ (photons opposite).

---

Full worked solutions with intermediate steps are available in the Round 3 handbook when published.
