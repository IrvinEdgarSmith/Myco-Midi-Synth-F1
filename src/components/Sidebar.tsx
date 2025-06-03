// Sidebar.tsx
import React, { useState } from "react";

export default function Sidebar() {
  const [advSound, setAdvSound] = useState(false);
  const [advTimbre, setAdvTimbre] = useState(false);
  const [advSpectrum, setAdvSpectrum] = useState(false);
const [advUnison, setAdvUnison] = useState(false);
const [waveform, setWaveform] = useState<string>("Sine");

  return (
    <aside className="sidebar sidebar--left">
      <div style={{ color: "var(--accent)", fontWeight: "bold", marginBottom: "1rem" }}>
        Subtractive Synth
      </div>

      {/* Sound Generation */}
      <section className="container sound-generation">
        <h2>Sound Generation</h2>        <div className="control">
          <label>Type:</label>
          <div className="wave-buttons">
            <button type="button" className={waveform === "Sine" ? "active" : ""} onClick={() => setWaveform("Sine")}>Sine</button>
            <button type="button" className={waveform === "Triangle" ? "active" : ""} onClick={() => setWaveform("Triangle")}>Triangle</button>
            <button type="button" className={waveform === "Sawtooth" ? "active" : ""} onClick={() => setWaveform("Sawtooth")}>Sawtooth</button>
            <button type="button" className={waveform === "Square" ? "active" : ""} onClick={() => setWaveform("Square")}>Square</button>
          </div>
        </div>
        <div className="control">
          <label>Coarse Tune:</label>
          <input type="range" min="-64" max="64" />
        </div>
        <div className="control">
          <label>Fine Tune:</label>
          <input type="range" min="-1" max="1" step="0.01" />
        </div>
        <button onClick={() => setAdvSound(!advSound)}>
          {advSound ? "Hide Advanced" : "Show Advanced"}
        </button>
        {advSound && (
          <div className="advanced">
            <div className="control">
              <label>Pulse Width:</label>
              <input type="range" min="0" max="100" />
            </div>
            <div className="control">
              <label>Supersaw Detune:</label>
              <input type="range" min="0" max="100" />
            </div>
          </div>
        )}
      </section>

      {/* Timbre Shaping */}
      <section className="container timbre-shaping">
        <h2>Timbre Shaping</h2>
        <div className="control">
          <label>Filter Type:</label>
          <select>
            <option>Low-pass</option>
            <option>High-pass</option>
            <option>Band-pass</option>
            <option>Notch</option>
          </select>
        </div>
        <div className="control">
          <label>Cutoff:</label>
          <input type="range" min="20" max="20000" />
        </div>
        <div className="control">
          <label>Resonance:</label>
          <input type="range" min="0" max="1" step="0.01" />
        </div>
        <button onClick={() => setAdvTimbre(!advTimbre)}>
          {advTimbre ? "Hide Advanced" : "Show Advanced"}
        </button>
        {advTimbre && (
          <div className="advanced">
            <div className="control">
              <label>Env Amount:</label>
              <input type="range" min="0" max="1" step="0.01" />
            </div>
            <div className="control">
              <label>Keyboard Tracking:</label>
              <input type="checkbox" />
            </div>
          </div>
        )}
      </section>

      {/* Spectrum Display */}
      <section className="container spectrum-display">
        <h2>Module Spectrum</h2>
        {/* Placeholder for FFT graph */}
        <div className="fft-placeholder">[FFT Graph]</div>
        <button onClick={() => setAdvSpectrum(!advSpectrum)}>
          {advSpectrum ? "Hide Advanced" : "Show Advanced"}
        </button>
        {advSpectrum && (
          <div className="advanced">
            <div className="control">
              <label>Range Zoom:</label>
              <input type="range" min="1" max="10" />
            </div>
            <div className="control">
              <label>Smoothing:</label>
              <input type="range" min="0" max="1" step="0.01" />
            </div>
          </div>
        )}
      </section>

      {/* Unison & Tuning */}
      <section className="container unison-tuning">
        <h2>Unison & Tuning</h2>
        <div className="control">
          <label>Voice Count:</label>
          <input type="number" min="1" max="16" />
        </div>
        <div className="control">
          <label>Spread:</label>
          <input type="range" min="0" max="1" step="0.01" />
        </div>
        <button onClick={() => setAdvUnison(!advUnison)}>
          {advUnison ? "Hide Advanced" : "Show Advanced"}
        </button>
        {advUnison && (
          <div className="advanced">
            <div className="control">
              <label>Coarse Detune:</label>
              <input type="range" min="-12" max="12" />
            </div>
            <div className="control">
              <label>Fine Detune:</label>
              <input type="range" min="-0.5" max="0.5" step="0.01" />
            </div>
            <div className="control">
              <label>Phase Mode:</label>
              <select>
                <option>Normal</option>
                <option>Inverted</option>
              </select>
            </div>
            <button className="control">Match Levels</button>
          </div>
        )}
      </section>
    </aside>
  );
}
