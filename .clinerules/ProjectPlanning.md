# Project Planning

*Single source-of-truth blueprint for project vision, features, and UI layout.*

---

## [Main UI Layout: Canvas Plan]

**Palette:**  
- Dark theme: Deep blue (primary), secondary purple, deep cyan (tertiary), deep magenta (third), deep lime green (accent).  
- Use gradients, borders, and accent highlights for phase separation and active states.

**Layout:**  
- Left Sidebar (27%): Subtractive Synth
- Center Workspace (46%): Real-time feedback, global controls, visualizers
- Right Sidebar (27%): Additive Synth

### UI Container Hierarchy

- **Left Sidebar: Subtractive Synth**
  - Sound Generation
    - OSC selectors, tuning knobs, waveform dropdown
    - Advanced: waveform-specific settings (Pulse Width, Supersaw detune/mix)
  - Timbre Shaping
    - Filter type, cutoff, resonance
    - Advanced: envelope amount, keyboard tracking
  - Spectrum Display
    - Mini-FFT graph
    - Advanced: range zoom, smoothing
  - Unison & Tuning
    - Voice count, spread
    - Advanced: coarse/fine detune, phase mode, match-levels

- **Central Workspace**
  - Abstract Audio Visualizer (top 30%)
  - Global Spectrum Display
    - FFT canvas
    - Advanced: spectrogram/waterfall, fftSize
  - Subtractive/ Additive Spectrum Displays
    - Mini-FFT graphs per phase
    - Advanced: range/smoothing controls
  - MIDI Inputs & Mapping
    - Live values: Pitch/Mod wheel, mapped controls
    - MIDI-Learn: enter/exit, assign, clear, presets
    - Advanced: mapping management
  - Modulation Matrix Access
    - Open matrix, source grouping, favorites
    - Advanced: within-matrix toggles
  - Modulation
    - LFO/Env controls, assignments
    - Advanced: secondary routing, polarity
  - Global Controls & Effects
    - Master volume, pan, preset browser
    - Advanced: send-levels, FX (EQ, Distortion, Flanger, Bitcrusher)
  - Global Amplitude Envelope
    - ADSR sliders, graph, reset
    - Advanced: curve presets, context-suspend
    - Additive/ Subtractive phase envelopes with velocity/curve options

- **Right Sidebar: Additive Synth**
  - Sound Generation
    - Harmonic presets
    - Advanced: partial count, phase per partial
  - Timbre Shaping
    - Brightness, spread, odd/even balance
    - Advanced: spectral tilt
  - Spectral Shaping (Advanced)
    - Harmonic smear, stretch, comb
    - Deep Edit: 16 partial sliders, reset

---

### “Done” Criteria for Each Container

- Clear label and icon
- Atomic controls grouped by function
- Advanced toggle for extra settings
- Keyboard and screen-reader accessible
- Error/empty states handled
- Visual separation (border/gradient)
- Tooltips for all controls

---

### Next Steps

- Sketch color/typography system for palette and accents
- Log plan in activeContext.md and taskProgress.md
