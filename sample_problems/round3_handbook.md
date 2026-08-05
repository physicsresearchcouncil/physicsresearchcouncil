# The Physics Championship: Round 3 Olympiad Theory Handbook
**20 Advanced Derivations and Proofs**  
*Organized by the Physics Research Council*  
*Contact: physicsresearchcouncil@gmail.com*

---

## Problem 1: Classical Mechanics (Oscillations of Liquid in a U-Tube)
A liquid of mass density rho and total length L is placed inside a uniform vertical U-tube of cross-sectional area A. If the liquid is displaced slightly from its equilibrium position and released, prove that it executes simple harmonic motion and derive its oscillation frequency.

### Proof:
Displace liquid by x. Height difference is 2x. Restoring force $F = -(2x A \rho) g$. With $M = L A \rho$:
$$L \frac{d^2x}{dt^2} = -2gx \implies \omega = \sqrt{\frac{2g}{L}}$$

---

## Problem 2: Classical Mechanics (Escape Velocity of a Variable Density Planet)
Planet of radius R has density $\rho(r) = \rho_0(1 - r/R)$. Derive escape velocity from the surface.

### Proof:
$$M = \frac{\pi \rho_0 R^3}{3}, \quad v_e = \sqrt{\frac{2GM}{R}} = \sqrt{\frac{2}{3}\pi G \rho_0 R^2}$$

---

## Problem 3: Classical Mechanics (Double Pendulum Lagrangian)
Two identical bobs of mass m, strings of length L. Derive Lagrangian in terms of $\theta_1$, $\theta_2$.

### Proof:
$$T = \frac{1}{2}mL^2[2\dot{\theta}_1^2 + \dot{\theta}_2^2 + 2\dot{\theta}_1\dot{\theta}_2\cos(\theta_1-\theta_2)]$$
$$U = -mgL(2\cos\theta_1 + \cos\theta_2)$$
$$\mathcal{L} = T - U$$

---

## Problem 4: Classical Mechanics (Normal Force on a Rolling Cylinder inside a Sphere)
Cylinder mass m radius r rolls without slipping inside hollow cylinder radius R. Start from rest at horizontal. Find N(theta).

### Proof:
Energy gives $(R-r)\dot{\theta}^2 = \frac{4}{3}g(1-\cos\theta)$. Radial force balance:
$$N = \frac{1}{3}mg(4 - \cos\theta)$$

---

## Problem 5: Classical Mechanics (Sliding Wedge on a Frictionless Table)
Wedge mass M, angle alpha, on frictionless table; block mass m on frictionless incline. Find acceleration of wedge.

### Proof:
$$A = -\frac{m g \sin\alpha \cos\alpha}{M + m \sin^2\alpha}$$

---

## Problem 6: Electrodynamics (Magnetic Field of a Rotating Charged Sphere)
Hollow sphere radius R, surface charge sigma, rotates with angular velocity omega. Prove $B = \frac{2}{3}\mu_0 \sigma R \omega$ at the center.

### Proof:
Integrate ring contributions: $B = \frac{\mu_0 \sigma R \omega}{2}\int_0^\pi \sin^3\theta\,d\theta = \frac{2}{3}\mu_0 \sigma R \omega$.

---

## Problem 7: Electrodynamics (LC Parallel Circuit Oscillations)
Two identical capacitors C in parallel through inductor L; one charged to V_0. Find I(t).

### Proof:
$$I(t) = V_0\sqrt{\frac{C}{2L}}\sin\left(\sqrt{\frac{2}{LC}} t\right)$$

---

**Continued:** [Problems 8–20](round3_handbook_part2.md)
