# QuantumBall
## A generator for Powerball using quantum random number generation

### The website may be accessed [here](https://czaplickijakub.github.io/QuantumBall/).

### Credits: 
teekid @ [Canva](https://www.canva.com/photos/MAEEhL1tOPk-abstract-light/).

### What I've Learned From This Project
- How to use JSON APIs and interpreting results with javaScript
- Manipulating the DOM using javaScript
- Website Design
- The difference between pseudorandom and truly random numbers
  - The problems that arise when generating these numbers
  - The numerous implications that relate to random numbers.

## About
This project was inspired by a friend asking me for Powerball numbers. After dealing shuffled cards, I realized how inneffective my method was. This was partly due to a lack of range (Powerball goes up to 69, cards only go from A-K which is 13). However, what bothered me most were concerns about shuffle quality.

This reminded me of the app [Randonautica](https://www.randonautica.com/). It offers users a randomly generated location so they may go there and explore. What is unique about this app is that it uses a quantum random number generator (QRNG). Many users report chilling accounts about how their thoughts influenced the QRNG's results.

The API that supplies these numbers is courtesy of [The Australian National University](https://qrng.anu.edu.au/contact/api-documentation/). Proponents of QRNGs state that it may be used to measure [global human consciousness](https://noosphere.princeton.edu/). Other implications include, but are not limited to,  [cybersecurity](https://spectrum.ieee.org/quantum-randomness-boosts-everyday-security) and [virus  simulations](https://www.random.org/randomness/).

Research for this app was truly wild. The rabbit hole started with [ornithology](https://daily.jstor.org/the-quantum-random-number-generator/), casually mentioned [faster than light communication](https://daily.jstor.org/the-quantum-random-number-generator/), and ended with a brief, lighthearted discussion about [determinism and free will](https://mindmatters.ai/2018/12/quantum-randomness-gives-nature-free-will/).

Overall, this was a fun, yet challenging project.

## KNOWN ISSUES
- Numbers may repeat. Unlikely, but possible.