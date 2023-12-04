import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Loading = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <rect x="19" y="19" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
            calcMode="discrete"
          />
        </rect>

        <rect x="40" y="19" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            calcMode="discrete"
          />
        </rect>
        <rect x="61" y="19" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            calcMode="discrete"
          />
        </rect>
        <rect x="19" y="40" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            calcMode="discrete"
          />
        </rect>
        <rect x="61" y="40" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            calcMode="discrete"
          />
        </rect>
        <rect x="19" y="61" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            calcMode="discrete"
          />
        </rect>
        <rect x="40" y="61" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            calcMode="discrete"
          />
        </rect>
        <rect x="61" y="61" width="20" height="20" fill="#483eff">
          <animate
            attributeName="fill"
            values="#eff5ff;#483eff;#483eff"
            keyTimes="0;0.125;1"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            calcMode="discrete"
          />
        </rect>
      </svg>
    </Container>
  );
};

export default Loading;
