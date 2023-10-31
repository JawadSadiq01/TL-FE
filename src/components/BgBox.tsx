import React  from 'react';

interface BgBoxStyle {
  style: React.CSSProperties;
}
let boxNo = 1

const BgBox = ({ style}:BgBoxStyle) => {
  return (
    <div className={`$box`} style={style}>
    </div>
  );
};

export default BgBox;
