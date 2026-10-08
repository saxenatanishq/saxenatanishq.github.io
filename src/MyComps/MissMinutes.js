import React from "react";

/**
 * Miss Minutes — the clock-face character from the provided vanilla HTML/CSS
 * implementation, translated 1:1 into React markup (class names namespaced
 * with `mm-`). Pure CSS drawing + keyframe animation, no images/dependencies.
 * Placement/scale live in App.css (.tva-mm) so she floats beside the TemPad.
 * Decorative only — the parent <aside> is aria-hidden.
 */
const SECOND_MARKS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const MissMinutes = () => (
  <div className="tva-mm">
    <div className="mm-c">
      {/* <h1 className="mm-title">{"HEY Y'ALL!"}</h1> */}

      <div className="mm-face">
        <div className="mm-eye-container">
          <div className="mm-eyes mm-left-eye">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="mm-eyes mm-right-eye">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="mm-nose" />
        <div className="mm-mouth">
          <span />
          <span />
        </div>
        <div className="mm-time mm-time-12" />
        <div className="mm-time mm-time-3" />
        <div className="mm-time mm-time-6" />
        <div className="mm-time mm-time-9" />
        <div className="mm-sec-container">
          {SECOND_MARKS.map((n) => (
            <div className="mm-sec" key={n} />
          ))}
        </div>
      </div>

      <div className="mm-back-face" />

      <div className="mm-hand mm-right-hand">
        <div className="mm-fingers mm-finger-1" />
        <div className="mm-fingers mm-finger-2" />
        <div className="mm-fingers mm-finger-3" />
        <div className="mm-fingers mm-finger-4" />
      </div>

      <div className="mm-forearm mm-forearm-right">
        <div className="mm-fdetail mm-fdetail-1" />
        <div className="mm-fdetail mm-fdetail-2" />
        <div className="mm-fdetail mm-fdetail-3" />
        <div className="mm-elbow" />
      </div>

      <div className="mm-forearm mm-forearm-left">
        <div className="mm-fdetail mm-fdetail-1" />
        <div className="mm-fdetail mm-fdetail-2" />
        <div className="mm-fdetail mm-fdetail-3" />
        <div className="mm-elbow" />
      </div>

      <div className="mm-hand mm-left-hand">
        <div className="mm-fingers mm-finger-1" />
        <div className="mm-fingers mm-finger-2" />
        <div className="mm-fingers mm-finger-3" />
      </div>

      <div className="mm-leg mm-right-leg" />
      <div className="mm-leg mm-left-leg" />

      <div className="mm-shoes-wrap mm-shoes-wrap-right">
        <div className="mm-shoe mm-right-shoe" />
        <span className="mm-shoe-detail mm-shoe-detail-1" />
        <span className="mm-shoe-detail mm-shoe-detail-2" />
        <span className="mm-shoe-detail mm-shoe-detail-3" />
      </div>
      <div className="mm-shoes-wrap mm-shoes-wrap-left">
        <div className="mm-shoe mm-left-shoe" />
        <span className="mm-shoe-detail mm-shoe-detail-1" />
        <span className="mm-shoe-detail mm-shoe-detail-2" />
        <span className="mm-shoe-detail mm-shoe-detail-3" />
      </div>
    </div>
  </div>
);

export default MissMinutes;
