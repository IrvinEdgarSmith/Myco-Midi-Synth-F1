import React, { useState } from "react";

export default function Sidebar() {
  const [advSound, setAdvSound] = useState(false);
  const [advSpectrum, setAdvSpectrum] = useState(false);
  const [advUnison, setAdvUnison] = useState(false);
  const [waveform, setWaveform] = useState<string>("Sine");
  const [basicFilters, setBasicFilters] = useState(true);
  const [advancedFilters, setAdvancedFilters] = useState(false);
  const [selectedBasicFilter, setSelectedBasicFilter] = useState<string>("Low-pass");
  const [selectedAdvancedFilter, setSelectedAdvancedFilter] = useState<string>("Comb");

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
      </section>      {/* Timbre Shaping */}
      <section className="container timbre-shaping">
        <h2>Timbre Shaping</h2>
        
        {/* Basic Filters Toggle Bar */}
        <div className="filter-toggle-bar">
          <button 
            className={`toggle-bar ${basicFilters ? 'active' : ''}`}
            onClick={() => setBasicFilters(!basicFilters)}
          >
            <span className="toggle-icon">{basicFilters ? '▼' : '▶'}</span>
            Basic Filters
            <span className="filter-hint">Essential tone shaping</span>
          </button>
        </div>
        
        {basicFilters && (
          <div className="filter-section basic-filters">
            <div className="control">
              <label>Filter Type:</label>
              <select 
                value={selectedBasicFilter} 
                onChange={(e) => setSelectedBasicFilter(e.target.value)}
              >
                <option value="Low-pass">Low-pass (LP)</option>
                <option value="High-pass">High-pass (HP)</option>
                <option value="Band-pass">Band-pass (BP)</option>
                <option value="Notch">Notch (Stop)</option>
              </select>
            </div>
            <div className="control">
              <label>Cutoff Frequency:</label>
              <input type="range" min="20" max="20000" defaultValue="1000" />
              <span className="value-display">1000 Hz</span>
            </div>
            <div className="control">
              <label>Resonance (Q):</label>
              <input type="range" min="0.1" max="30" step="0.1" defaultValue="1" />
              <span className="value-display">1.0</span>
            </div>
            <div className="control">
              <label>Drive/Saturation:</label>
              <input type="range" min="0" max="100" defaultValue="0" />
              <span className="value-display">0%</span>
            </div>
          </div>
        )}

        {/* Advanced Filters Toggle Bar */}
        <div className="filter-toggle-bar">
          <button 
            className={`toggle-bar ${advancedFilters ? 'active' : ''}`}
            onClick={() => setAdvancedFilters(!advancedFilters)}
          >
            <span className="toggle-icon">{advancedFilters ? '▼' : '▶'}</span>
            Advanced Filters
            <span className="filter-hint">Power user controls</span>
          </button>
        </div>

        {advancedFilters && (
          <div className="filter-section advanced-filters">
            <div className="control">
              <label>Advanced Type:</label>
              <select 
                value={selectedAdvancedFilter} 
                onChange={(e) => setSelectedAdvancedFilter(e.target.value)}
              >
                <option value="Comb">Comb Filter</option>
                <option value="Formant">Formant Filter</option>
                <option value="Ladder">Ladder (Moog-style)</option>
                <option value="State Variable">State Variable</option>
                <option value="Diode">Diode Ladder</option>
                <option value="Multi-mode">Multi-mode</option>
              </select>
            </div>
            <div className="control">
              <label>Filter Poles:</label>
              <select>
                <option value="12">12 dB/oct (2-pole)</option>
                <option value="24">24 dB/oct (4-pole)</option>
                <option value="36">36 dB/oct (6-pole)</option>
              </select>
            </div>
            <div className="control">
              <label>Env Amount:</label>
              <input type="range" min="-100" max="100" defaultValue="0" />
              <span className="value-display">0%</span>
            </div>
            <div className="control">
              <label>Keyboard Tracking:</label>
              <input type="range" min="0" max="100" defaultValue="0" />
              <span className="value-display">0%</span>
            </div>
            <div className="control">
              <label>LFO Modulation:</label>
              <input type="range" min="0" max="100" defaultValue="0" />
              <span className="value-display">0%</span>
            </div>
            <div className="control">
              <label>Filter Feedback:</label>
              <input type="range" min="0" max="95" defaultValue="0" />
              <span className="value-display">0%</span>
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
