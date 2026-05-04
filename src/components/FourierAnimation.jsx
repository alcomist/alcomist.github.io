import React, { useRef, useEffect, useState } from 'react';
import fourierPoints from '../fourierPoints.json';

function dft(x) {
  const N = x.length;
  const X = [];
  for (let k = 0; k < N; k++) {
    let re = 0;
    let im = 0;
    for (let n = 0; n < N; n++) {
      const phi = (2 * Math.PI * k * n) / N;
      re += x[n].x * Math.cos(phi) + x[n].y * Math.sin(phi);
      im -= x[n].x * Math.sin(phi) - x[n].y * Math.cos(phi);
    }
    re = re / N;
    im = im / N;
    
    let freq = k;
    if (k > N / 2) {
      freq = k - N;
    }
    
    let amp = Math.sqrt(re * re + im * im);
    let phase = Math.atan2(im, re);
    
    X.push({ re, im, freq, amp, phase });
  }
  return X;
}

const FourierAnimation = () => {
  const canvasRef = useRef(null);
  const [fourierData, setFourierData] = useState(null);
  const pathRef = useRef([]);

  useEffect(() => {
    // Use all points for maximum accuracy (removes jaggedness/Gibbs phenomenon)
    // 1976 points takes < 10ms to DFT in modern JS.
    const fourier = dft(fourierPoints);
    
    // Sort epicycles by amplitude so the largest circles are drawn first
    fourier.sort((a, b) => b.amp - a.amp);
    setFourierData(fourier);
  }, []);

  useEffect(() => {
    if (!fourierData) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    const N = fourierData.length;
    let time = 0;
    const dt = (2 * Math.PI) / N;
    
    // Draw slowly to let the user see each letter being drawn
    // 2 points per frame at 60fps = ~25 seconds to finish for ~3000 points
    const pointsPerFrame = 2;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let finalX = 0, finalY = 0;
      
      // Calculate multiple path points per frame to maintain smooth speed without losing resolution
      for (let step = 0; step < pointsPerFrame; step++) {
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        
        for (let i = 0; i < N; i++) {
          let freq = fourierData[i].freq;
          let radius = fourierData[i].amp;
          let phase = fourierData[i].phase;
          
          x += radius * Math.cos(freq * time + phase);
          y += radius * Math.sin(freq * time + phase);
        }
        
        pathRef.current.unshift({x, y});
        time += dt;
        finalX = x;
        finalY = y;
        
        // We limit path length so it draws exactly one cycle
        if (pathRef.current.length > N) {
           pathRef.current.pop();
        }
      }
      
      // Draw epicycles only for the current (last) position
      let x = canvas.width / 2;
      let y = canvas.height / 2;
      for (let i = 0; i < N; i++) {
        let prevX = x;
        let prevY = y;
        
        let freq = fourierData[i].freq;
        let radius = fourierData[i].amp;
        let phase = fourierData[i].phase;
        
        x += radius * Math.cos(freq * (time - dt) + phase);
        y += radius * Math.sin(freq * (time - dt) + phase);
        
        // Draw circle if radius is large enough to be visible
        if (radius > 0.5) {
          ctx.beginPath();
          ctx.arc(prevX, prevY, radius, 0, 2 * Math.PI);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.stroke();
        }
        
        // Draw radius line
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.stroke();
      }
      
      // Draw traced path
      ctx.beginPath();
      for (let i = 0; i < pathRef.current.length; i++) {
        const p = pathRef.current[i];
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.strokeStyle = 'var(--primary-color)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [fourierData]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px', marginBottom: '40px' }}>
      {!fourierData && <div style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Calculating Fourier Transforms...</div>}
      <canvas 
        ref={canvasRef} 
        width={800} 
        height={300} 
        style={{ 
          maxWidth: '100%', 
          height: 'auto', 
          borderRadius: '12px', 
          background: 'var(--glass-surface-bg)', 
          border: '1px solid var(--glass-border)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}
      />
    </div>
  );
};

export default FourierAnimation;
