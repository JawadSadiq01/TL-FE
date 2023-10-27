import React  from 'react';

interface BgBoxStyle {
  style: React.CSSProperties;
}

const BgBox = ({ style}:BgBoxStyle) => {
  return (
    <div style={style}>
    </div>
  );
};

export default BgBox;
