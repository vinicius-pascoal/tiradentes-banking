import PropTypes from "prop-types";

import "./CircularProgress.css";

const CircularProgress = (props) => {
  let {
    size = 150,
    progress = 0,
    trackWidth = 10,
    trackColor = `#292e7f`,
    indicatorWidth = 10,
    indicatorColor = `#07c`,
    indicatorCap = `round`,
    label = `gastos`,
    labelColor = `#1e2049`,
    spinnerMode = false,
    spinnerSpeed = 1,
  } = props;

  const center = size / 2,
    radius =
      center - (trackWidth > indicatorWidth ? trackWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - progress) / 100);

  let hideLabel = !!(size < 100 || !label.length || spinnerMode);

  return (
    <div className="svg-pi-wrapper" style={{ width: size, height: size }}>
      <svg className="svg-pi" style={{ width: size, height: size }}>
        <circle
          className="svg-pi-track"
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={trackColor}
          strokeWidth={trackWidth}
        />
        <circle
          className={`svg-pi-indicator ${
            spinnerMode ? "svg-pi-indicator--spinner" : ""
          }`}
          style={{ animationDuration: spinnerSpeed * 1000 }}
          cx={center}
          cy={center}
          fill="transparent"
          r={radius}
          stroke={indicatorColor}
          strokeWidth={indicatorWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap={indicatorCap}
        />
      </svg>
      {!hideLabel && (
        <div className="svg-pi-label" style={{ color: labelColor }}>
          <span className="svg-pi-label__loading">{label}</span>

          {!spinnerMode && (
            <span className="svg-pi-label__progress">
              {`${progress > 100 ? 100 : progress}%`}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

CircularProgress.propTypes = {
  size: PropTypes.number,
  progress: PropTypes.number,
  trackWidth: PropTypes.number,
  trackColor: PropTypes.string,
  indicatorWidth: PropTypes.number,
  indicatorColor: PropTypes.string,
  indicatorCap: PropTypes.string,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  spinnerMode: PropTypes.bool,
  spinnerSpeed: PropTypes.number,
};

export default CircularProgress;
