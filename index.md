This web site demonstrates the audio examples of the paper titled **GANStrument: Adversarial Instrument Sound Synthesis with Pitch-invariant Instance Conditioning**.

**GANStrument** is a novel generative adversarial model for instrument sound synthesis.
Given a one-shot sound as an input, it is able to generate pitched instrument sounds that reflects a timbre of the input within an interactive time.
By exploiting instance conditioning, GANStrument realizes better fidelity and diversity of synthesized sounds as well as the generalization capability against the various inputs.
In addition, we introduce an adversarial training scheme for pitch-invariant feature extractor, which significantly improves the pitch accuracy and timbre consistency.

# Playing MIDIs
J.S. Bach Prelude

Bass Loop

# Conditioning Comparison
We compare our model with strong conditional GAN baselines.
The first model is conditioned on pitch, and the other is conditioned on both pitch and instrument category where we used 11 instrument categories of NSynth dataset.
The baseline models struggle with inverting the inputs and completely fail to mix two sounds.
On the other hand, GANStrument smoothly interpolates two timbres with accurate pitches.

# Feature Extractor Comparison
we conduct an ablation study to verify the effectiveness of the pitch-invariant feature extractor.
The baseline feature extractor the is trained without pitch-adversarial training scheme produces inaccurate pitches especially in the higher tones and timbre inconsistency as shown in the blue boxes.
On the other hand, our pitch-invariant feature extractor produces stable pitches with timbre consistency.

# Additional Examples
## Single generation

## Latent interpolation
