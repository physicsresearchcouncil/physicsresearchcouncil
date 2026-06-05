# The Physics Championship - Round 3: Olympiad Theory (Sample Problems)

This document contains 3 advanced, multi-part theoretical problems reflecting the level of **Round 3 (Olympiad Theory Challenge)**. These problems require advanced mathematical techniques, including differential equations, calculus-based derivations, and relativistic conservation laws.

---

## Problem 1: Classical Mechanics — Small Oscillations of a Rolling Cylinder
A solid, uniform cylinder of mass $m$ and radius $r$ rolls without slipping along the inner surface of a fixed hollow cylinder of much larger radius $R$. The system is in a uniform gravitational field $g$ directed downwards.

```
       / \
     /     \
    |   .   |   <-- Hollow Cylinder (Radius R)
    |  /    |
    | \_O'  |
    |   \   |
    |    O  |   <-- Rolling Cylinder (Radius r)
     \     /
       \_/
```

### Questions:
1.  **[5 Marks]** Write the Lagrangian $L$ of the rolling cylinder in terms of the angular position $\theta$ of the cylinder's center of mass relative to the vertical axis.
2.  **[10 Marks]** Apply the Euler-Lagrange equations to find the equation of motion for the cylinder.
3.  **[5 Marks]** Determine the frequency of small oscillations ($\omega_0$) about the stable equilibrium position ($\theta = 0$).

---

### Solution:

#### 1. Formulating the Lagrangian
Let $\theta$ be the angle that the line connecting the center of the hollow cylinder ($O'$) and the center of the rolling cylinder ($O$) makes with the downward vertical.
The distance from the center of the hollow cylinder to the center of the rolling cylinder is:
$$d = R - r$$

The velocity of the center of mass of the rolling cylinder is:
$$v_{\text{cm}} = (R - r)\dot{\theta}$$

Let $\phi$ be the angle of rotation of the small cylinder about its own axis. The condition for rolling without slipping on the inner surface states that the arc lengths traversed must be equal:
$$R\theta = r(\theta + \phi) \implies r\phi = (R - r)\theta$$
Differentiating with respect to time:
$$\dot{\phi} = \left(\frac{R - r}{r}\right)\dot{\theta}$$

The total kinetic energy $T$ is the sum of translational kinetic energy and rotational kinetic energy about the center of mass:
$$T = T_{\text{trans}} + T_{\text{rot}} = \frac{1}{2}mv_{\text{cm}}^2 + \frac{1}{2}I_{\text{cm}}\dot{\phi}^2$$
For a solid cylinder, the moment of inertia is $I_{\text{cm}} = \frac{1}{2}mr^2$. Substituting $v_{\text{cm}}$ and $\dot{\phi}$:
$$T = \frac{1}{2}m(R - r)^2\dot{\theta}^2 + \frac{1}{2}\left(\frac{1}{2}mr^2\right)\left(\frac{R - r}{r}\right)^2\dot{\theta}^2$$
$$T = \frac{1}{2}m(R - r)^2\dot{\theta}^2 + \frac{1}{4}m(R - r)^2\dot{\theta}^2 = \frac{3}{4}m(R - r)^2\dot{\theta}^2$$

Choosing the bottom of the hollow cylinder as the zero-potential energy reference, the height of the center of mass of the rolling cylinder is $h = r + (R - r)(1 - \cos\theta)$.
The potential energy $U$ is:
$$U = mgh = mg(R - r)(1 - \cos\theta) + \text{constant}$$
The Lagrangian $L = T - U$ is:
$$L(\theta, \dot{\theta}) = \frac{3}{4}m(R - r)^2\dot{\theta}^2 - mg(R - r)(1 - \cos\theta)$$

---

#### 2. Equation of Motion
The Euler-Lagrange equation is:
$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}}\right) - \frac{\partial L}{\partial \theta} = 0$$

Calculate the partial derivatives:
$$\frac{\partial L}{\partial \dot{\theta}} = \frac{3}{2}m(R - r)^2\dot{\theta}$$
$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{\theta}}\right) = \frac{3}{2}m(R - r)^2\ddot{\theta}$$
$$\frac{\partial L}{\partial \theta} = -mg(R - r)\sin\theta$$

Substituting these into the Euler-Lagrange equation:
$$\frac{3}{2}m(R - r)^2\ddot{\theta} + mg(R - r)\sin\theta = 0$$
Dividing by $\frac{3}{2}m(R - r)^2$:
$$\ddot{\theta} + \frac{2g}{3(R - r)}\sin\theta = 0$$

---

#### 3. Frequency of Small Oscillations
For small oscillations about the stable equilibrium ($\theta \approx 0$), we use the small-angle approximation $\sin\theta \approx \theta$:
$$\ddot{\theta} + \frac{2g}{3(R - r)}\theta = 0$$
This is the standard simple harmonic oscillator equation $\ddot{\theta} + \omega_0^2\theta = 0$, where:
$$\omega_0 = \sqrt{\frac{2g}{3(R - r)}}$$

---

## Problem 2: Electrodynamics — The "Effective Mass" of a Capacitor-Linked Rail
A conducting bar of mass $m$ and length $L$ slides frictionlessly along two parallel, horizontal conducting rails. The rails are connected at one end to a capacitor of capacitance $C$. A uniform magnetic field $\vec{B}$ points vertically upwards, perpendicular to the plane of the rails. The bar is given an initial velocity $v_0$ at time $t = 0$.

```
     +--------+------------------+
     |        |                  |  ---> v(t)
    [C]       | Bar (m, L)       |  (Direction of motion)
     |        |                  |
     +--------+------------------+
      Magnetic Field B (Out of page)
```

### Questions:
1.  **[5 Marks]** Find the relationship between the speed of the bar $v(t)$, the induced electromotive force (emf) $\mathcal{E}(t)$, and the charge $q(t)$ on the capacitor.
2.  **[10 Marks]** Using Newton's Second Law and the Lorentz force, write the differential equation governing the velocity $v(t)$ of the bar.
3.  **[5 Marks]** Solve the equation to find $v(t)$ and explain the physical meaning of the result.

---

### Solution:

#### 1. EMF and Capacitor Charge
As the bar moves with velocity $v(t)$ through the magnetic field $B$, it experiences motional electromotive force (emf) due to the magnetic force acting on its charges. The induced emf is:
$$\mathcal{E}(t) = B L v(t)$$

Since the rails and the bar are perfectly conducting (zero resistance), the potential difference across the capacitor must equal this induced emf:
$$V_C(t) = \mathcal{E}(t) = B L v(t)$$
The charge $q(t)$ stored in the capacitor is:
$$q(t) = C V_C(t) = C B L v(t)$$

---

#### 2. Equation of Motion
The current $I(t)$ flowing in the circuit is the rate of change of charge on the capacitor:
$$I(t) = \frac{dq}{dt} = C B L \frac{dv}{dt} = C B L a(t)$$
where $a(t) = \dot{v}(t)$ is the acceleration of the bar.

A wire carrying a current $I(t)$ in a magnetic field $B$ experiences a magnetic force (Lorentz force):
$$F_B(t) = I(t) L B$$
By Lenz's law, this force opposes the motion. Thus, the magnetic force acts as a retarding force:
$$F_B(t) = - (C B L a) L B = - C B^2 L^2 a(t)$$

Applying Newton's Second Law to the bar:
$$m a(t) = F_B(t) \implies m a(t) = - C B^2 L^2 a(t)$$
Rearranging terms:
$$\left(m + C B^2 L^2\right) a(t) = 0$$

---

#### 3. Solving for $v(t)$ and Physical Interpretation
Since $a(t) = \frac{dv}{dt}$:
$$\left(m + C B^2 L^2\right) \frac{dv}{dt} = 0$$
Since $m$, $C$, $B$, and $L$ are positive constants, the term $\left(m + C B^2 L^2\right)$ is non-zero. Therefore, the acceleration must be zero at all times:
$$\frac{dv}{dt} = 0 \implies v(t) = v_0 \quad (\text{for all } t \ge 0)$$

**Physical Interpretation:**
Normally, connecting a resistor across the rails causes electromagnetic braking, resulting in the velocity decaying exponentially to zero (converting kinetic energy to heat). 
However, here, the capacitor stores electrostatic energy rather than dissipating it. The term $m_{\text{eff}} = C B^2 L^2$ acts as an **electromagnetic effective mass** added to the physical mass of the bar. The total momentum of the system is shared between the mechanical momentum of the bar and the field momentum. Since there is no resistance, no energy is lost, and the bar continues to slide at its initial velocity $v_0$ indefinitely, with the capacitor maintaining a constant charge $q = C B L v_0$.

---

## Problem 3: Special Relativity — Symmetric Pion Decay
A neutral pion ($\pi^0$) of rest mass $M$ moves with relativistic energy $E$ along the x-axis. It decays in flight into two photons ($\gamma_1$ and $\gamma_2$). In the laboratory frame, the two photons are emitted symmetrically at equal angles $\theta$ relative to the original line of flight (the x-axis).

```
                      \  Photon 1 (Energy E_y, angle theta)
                       \
    ====================* (Decay point)
   Pion (Mass M, Energy E) \
                         \ Photon 2 (Energy E_y, angle -theta)
```

### Questions:
1.  **[5 Marks]** Write the energy and momentum conservation equations in the laboratory frame.
2.  **[10 Marks]** Using the relativistic energy-momentum invariant relation ($E^2 - p^2c^2 = M^2c^4$), find the relation between the emission angle $\theta$, the pion mass $M$, and the pion energy $E$.
3.  **[5 Marks]** Show that the minimum angle of separation between the two photons, $\theta_{\text{min}}$, occurs in the limit of infinite pion energy, and evaluate its limit.

---

### Solution:

#### 1. Conservation Laws
Let the energy of each photon in the laboratory frame be $E_\gamma$. Since the decay is symmetric, the two photons must have the same energy.
The momentum of a photon is $p_\gamma = E_\gamma / c$.

-   **Energy Conservation:**
    $$E = E_{\gamma_1} + E_{\gamma_2} \implies E = 2 E_\gamma \implies E_\gamma = \frac{E}{2}$$
-   **Momentum Conservation along x-axis (original direction):**
    $$p = p_{\gamma_1}\cos\theta + p_{\gamma_2}\cos\theta \implies p = 2 \frac{E_\gamma}{c}\cos\theta$$
    Using $E_\gamma = E/2$:
    $$p = 2 \left(\frac{E}{2c}\right)\cos\theta = \frac{E}{c}\cos\theta \implies pc = E\cos\theta$$
-   **Momentum Conservation along y-axis (transverse direction):**
    $$0 = p_{\gamma_1}\sin\theta - p_{\gamma_2}\sin\theta = \frac{E_\gamma}{c}\sin\theta - \frac{E_\gamma}{c}\sin\theta = 0 \quad (\text{symmetrically satisfied})$$

---

#### 2. Deriving the Relation
We use the energy-momentum invariant relation for the moving pion:
$$E^2 - p^2c^2 = M^2c^4$$
Substitute $pc = E\cos\theta$ from momentum conservation:
$$E^2 - (E\cos\theta)^2 = M^2c^4$$
$$E^2(1 - \cos^2\theta) = M^2c^4$$
$$E^2\sin^2\theta = M^2c^4$$
Taking the square root:
$$E\sin\theta = Mc^2 \implies \sin\theta = \frac{Mc^2}{E}$$
This is the exact relativistic relation connecting the symmetric emission angle $\theta$ to the mass $M$ and energy $E$ of the pion.

---

#### 3. Separation Angle Analysis
The total separation angle between the two photons is $2\theta$. From the relation:
$$\sin\theta = \frac{Mc^2}{E}$$
As the energy $E$ of the pion increases ($E \to \infty$ for extreme relativistic speeds):
$$\sin\theta \to 0 \implies \theta \to 0$$
Thus, the minimum separation angle between the photons is:
$$2\theta_{\text{min}} = 0$$
This corresponds to the two photons being emitted forward, parallel to each other, in the laboratory frame as the pion velocity approaches the speed of light ($v \to c$).
Conversely, if the pion is at rest ($E = Mc^2$), then:
$$\sin\theta = \frac{Mc^2}{Mc^2} = 1 \implies \theta = 90^\circ$$
This means the two photons are emitted in opposite directions ($2\theta = 180^\circ$) in the pion's rest frame, as required by momentum conservation.
