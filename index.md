This web site demonstrates the audio examples of the paper titled **GANStrument: Adversarial Instrument Sound Synthesis with Pitch-invariant Instance Conditioning**.

**GANStrument** is a novel generative adversarial model for instrument sound synthesis.
Given a one-shot sound as an input, it is able to generate pitched instrument sounds that reflects a timbre of the input within an interactive time.
By exploiting instance conditioning, GANStrument realizes better fidelity and diversity of synthesized sounds as well as the generalization capability against the various inputs.
In addition, we introduce an adversarial training scheme for pitch-invariant feature extractor, which significantly improves the pitch accuracy and timbre consistency.

* TOC
{:toc}

# Playing MIDIs
J.S. Bach Prelude

Bass Loop

# Conditioning Comparison
We compare our model with strong conditional GAN baselines.
The first model is conditioned on pitch, and the other is conditioned on both pitch and instrument category where we used 11 instrument categories of NSynth dataset.
The baseline models struggle with inverting the inputs and completely fail to mix two sounds.
On the other hand, GANStrument smoothly interpolates two timbres with accurate pitches.

### Keyboard and Brass (Nsynth, Fig. 2 in the original paper)
<table>
  <tr>
    <th>conditioning</th>
    <th>input 1</th>
    <th>100:0</th>
    <th>75:25</th>
    <th>50:50</th>
    <th>25:75</th>
    <th>0:100</th>
    <th>input 2</th>
  </tr>
  <tr>
    <td>pitch</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_01/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td>pitch + instrument</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/baseline_02/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>pitch + instance (ours)</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/query1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/query1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/query2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_03/ganstrument/query2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Bass and Mallet (NSynth)
<table>
  <tr>
    <th>conditioning</th>
    <th>input 1</th>
    <th>100:0</th>
    <th>75:25</th>
    <th>50:50</th>
    <th>25:75</th>
    <th>0:100</th>
    <th>input 2</th>
  </tr>
  <tr>
    <td>pitch</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_01/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td>pitch + instrument</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/baseline_02/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>pitch + instance (ours)</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/query1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/query1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/query2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_01/ganstrument/query2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Vocal and Guitar (NSynth)
<table>
  <tr>
    <th>conditioning</th>
    <th>input 1</th>
    <th>100:0</th>
    <th>75:25</th>
    <th>50:50</th>
    <th>25:75</th>
    <th>0:100</th>
    <th>input 2</th>
  </tr>
  <tr>
    <td>pitch</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_01/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td>pitch + instrument</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/baseline_02/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>pitch + instance (ours)</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/query1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/query1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/query2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/nsynth_02/ganstrument/query2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Clarinet and Cello (Good-sounds)
<table>
  <tr>
    <th>conditioning</th>
    <th>input 1</th>
    <th>100:0</th>
    <th>75:25</th>
    <th>50:50</th>
    <th>25:75</th>
    <th>0:100</th>
    <th>input 2</th>
  </tr>
  <tr>
    <td>pitch</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_01/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td>pitch + instrument</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/baseline_02/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>pitch + instance (ours)</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/query1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/query1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/query2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_01/ganstrument/query2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Saxophone and Trumpet (Good-sounds)
<table>
  <tr>
    <th>conditioning</th>
    <th>input 1</th>
    <th>100:0</th>
    <th>75:25</th>
    <th>50:50</th>
    <th>25:75</th>
    <th>0:100</th>
    <th>input 2</th>
  </tr>
  <tr>
    <td>pitch</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_01/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td>pitch + instrument</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/baseline_02/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>pitch + instance (ours)</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/query1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/query1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_spec_ratio_0.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_audio_ratio_0.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_spec_ratio_0.25_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_audio_ratio_0.25_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_spec_ratio_0.50_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_audio_ratio_0.50_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_spec_ratio_0.75_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_audio_ratio_0.75_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_spec_ratio_1.00_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/fake_audio_ratio_1.00_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/query2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_02/ganstrument/query2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Flute and Violin (Good-sounds)
<table>
  <tr>
    <th>conditioning</th>
    <th>input 1</th>
    <th>100:0</th>
    <th>75:25</th>
    <th>50:50</th>
    <th>25:75</th>
    <th>0:100</th>
    <th>input 2</th>
  </tr>
  <tr>
    <td>pitch</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_spec_ratio_0.00_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_audio_ratio_0.00_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_spec_ratio_0.25_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_audio_ratio_0.25_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_spec_ratio_0.50_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_audio_ratio_0.50_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_spec_ratio_0.75_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_audio_ratio_0.75_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_spec_ratio_1.00_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/fake_audio_ratio_1.00_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_01/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td>pitch + instrument</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/target1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/target1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_spec_ratio_0.00_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_audio_ratio_0.00_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_spec_ratio_0.25_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_audio_ratio_0.25_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_spec_ratio_0.50_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_audio_ratio_0.50_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_spec_ratio_0.75_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_audio_ratio_0.75_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_spec_ratio_1.00_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/fake_audio_ratio_1.00_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/target2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/baseline_02/target2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>pitch + instance (ours)</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/query1_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/query1_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_spec_ratio_0.00_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_audio_ratio_0.00_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_spec_ratio_0.25_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_audio_ratio_0.25_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_spec_ratio_0.50_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_audio_ratio_0.50_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_spec_ratio_0.75_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_audio_ratio_0.75_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_spec_ratio_1.00_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/fake_audio_ratio_1.00_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/query2_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/conditioning_comparison/goodsounds_03/ganstrument/query2_audio.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>


# Feature Extractor Comparison
we conduct an ablation study to verify the effectiveness of the pitch-invariant feature extractor.
The baseline feature extractor the is trained without pitch-adversarial training scheme produces inaccurate pitches especially in the higher tones and timbre inconsistency as shown in the blue boxes.
On the other hand, our pitch-invariant feature extractor produces stable pitches with timbre consistency.

### Keyboard (NSynth)
<table>
  <tr>
    <th>feature extractor</th>
    <th>input</th>
    <th>88 pitches</th>
  </tr>
  <tr>
    <td>w/o adv. training</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/without_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/without_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/without_adv_training/fake_spec_pitch_all_flatten.png"><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/without_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>w/ adv. training</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/with_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/with_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/with_adv_training/fake_spec_pitch_all_flatten.png"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_03/with_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
</table>

### Vocal (NSynth)
<table>
  <tr>
    <th>feature extractor</th>
    <th>input</th>
    <th>88 pitches</th>
  </tr>
  <tr>
    <td>w/o adv. training</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/without_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/without_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/without_adv_training/fake_spec_pitch_all_flatten.png"><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/without_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>w/ adv. training</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/with_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/with_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/with_adv_training/fake_spec_pitch_all_flatten.png"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_01/with_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
</table>

### Mallet (NSynth)
<table>
  <tr>
    <th>feature extractor</th>
    <th>input</th>
    <th>88 pitches</th>
  </tr>
  <tr>
    <td>w/o adv. training</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/without_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/without_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/without_adv_training/fake_spec_pitch_all_flatten.png"><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/without_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>w/ adv. training</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/with_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/with_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/with_adv_training/fake_spec_pitch_all_flatten.png"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/nsynth_02/with_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
</table>

### Clarinet (Good-sounds)
<table>
  <tr>
    <th>feature extractor</th>
    <th>input</th>
    <th>88 pitches</th>
  </tr>
  <tr>
    <td>w/o adv. training</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/without_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/without_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/without_adv_training/fake_spec_pitch_all_flatten.png"><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/without_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>w/ adv. training</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/with_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/with_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/with_adv_training/fake_spec_pitch_all_flatten.png"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_01/with_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
</table>

### Cello (Good-sounds)
<table>
  <tr>
    <th>feature extractor</th>
    <th>input</th>
    <th>88 pitches</th>
  </tr>
  <tr>
    <td>w/o adv. training</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/without_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/without_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/without_adv_training/fake_spec_pitch_all_flatten.png"><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/without_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>w/ adv. training</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/with_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/with_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/with_adv_training/fake_spec_pitch_all_flatten.png"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_02/with_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
</table>

### Saxophone (Good-sounds, Fig. 3 in the original paper)
<table>
  <tr>
    <th>feature extractor</th>
    <th>input</th>
    <th>88 pitches</th>
  </tr>
  <tr>
    <td>w/o adv. training</td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/without_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/without_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/without_adv_training/fake_spec_pitch_all_flatten.png"><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/without_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
  <tr>
    <td><b>w/ adv. training</b></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/with_adv_training/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/with_adv_training/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/with_adv_training/fake_spec_pitch_all_flatten.png"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/feature_extraction_comparison/goodsounds_03/with_adv_training/fake_audio_pitch_all.wav" style="width:500px;height:30px;"></audio></td>
  </tr>
</table>


# Additional Examples
## Single generation
### Rooster Chicken (Fig. 4 in the original paper)
<table>
  <tr>
    <th>input</th>
    <th>pitch 48</th>
    <th>pitch 55</th>
    <th>pitch 60</th>
    <th>pitch 67</th>
    <th>pitch 72</th>
  </tr>
  <tr>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_spec_pitch_27.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_audio_pitch_27.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_spec_pitch_34.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_audio_pitch_34.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_spec_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_audio_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_spec_pitch_46.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_audio_pitch_46.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_spec_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/01/fake_audio_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Water Drop (Fig. 4 in the original paper)
<table>
  <tr>
    <th>input</th>
    <th>pitch 48</th>
    <th>pitch 55</th>
    <th>pitch 60</th>
    <th>pitch 67</th>
    <th>pitch 72</th>
  </tr>
  <tr>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_spec_pitch_27.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_audio_pitch_27.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_spec_pitch_34.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_audio_pitch_34.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_spec_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_audio_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_spec_pitch_46.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_audio_pitch_46.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_spec_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/02/fake_audio_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Firework Explosion
<table>
  <tr>
    <th>input</th>
    <th>pitch 36</th>
    <th>pitch 43</th>
    <th>pitch 48</th>
    <th>pitch 55</th>
    <th>pitch 60</th>
  </tr>
  <tr>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_spec_pitch_15.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_audio_pitch_15.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_spec_pitch_22.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_audio_pitch_22.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_spec_pitch_27.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_audio_pitch_27.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_spec_pitch_34.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_audio_pitch_34.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_spec_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/03/fake_audio_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Cat Meow
<table>
  <tr>
    <th>input</th>
    <th>pitch 60</th>
    <th>pitch 67</th>
    <th>pitch 72</th>
    <th>pitch 79</th>
    <th>pitch 84</th>
  </tr>
  <tr>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_spec_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_audio_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_spec_pitch_46.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_audio_pitch_46.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_spec_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_audio_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_spec_pitch_58.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_audio_pitch_58.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_spec_pitch_63.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/04/fake_audio_pitch_63.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

### Drill
<table>
  <tr>
    <th>input</th>
    <th>pitch 60</th>
    <th>pitch 67</th>
    <th>pitch 72</th>
    <th>pitch 79</th>
    <th>pitch 84</th>
  </tr>
  <tr>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/query_spec.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/query_audio.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_spec_pitch_39.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_audio_pitch_39.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_spec_pitch_46.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_audio_pitch_46.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_spec_pitch_51.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_audio_pitch_51.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_spec_pitch_58.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_audio_pitch_58.wav" style="width:100px;height:30px;"></audio></td>
    <td><img src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_spec_pitch_63.png" width="100"><br><audio controls src="https://ganstrument.github.io/ganstrument-demo/media/additional_examples/single_input/05/fake_audio_pitch_63.wav" style="width:100px;height:30px;"></audio></td>
  </tr>
</table>

## Latent interpolation
