// AdditiveSidebar.tsx
import React from "react";

export default function AdditiveSidebar() {
  return (
    <aside className="sidebar sidebar--right">
      <div style={{color: "#b6e94e", fontWeight: "bold", marginBottom: "1rem"}}>Right Sidebar (Additive Synth)</div>
      {/* Sound Generation */}
      <section className="container additive-sound-generation">
        <h2>Sound Generation</h2>
        {/* Harmonic preset buttons */}
        {/* Advanced: partial count selector, phase per partial */}
      </section>
      {/* Timbre Shaping */}
      <section className="container additive-timbre-shaping">
        <h2>Timbre Shaping</h2>
        {/* Brightness, spread/decay, odd/even balance knobs */}
        {/* Advanced: spectral tilt curve editor */}
      </section>
      {/* Spectral Shaping (Advanced) */}
      <section className="container spectral-shaping">
        <h2>Spectral Shaping</h2>
        {/* Harmonic smear, stretch, comb interval & depth */}
        {/* Deep Edit: Collapsible grid of 16 partial sliders, reset button */}
      </section>
    </aside>
  );
}
