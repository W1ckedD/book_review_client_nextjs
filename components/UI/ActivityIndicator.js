import {
  Dots,
  Levels,
  Sentry,
  Spinner,
  Squares,
  Digital,
  Bounce,
  Windmill,
} from "react-activity";
import "react-activity/dist/Dots.css";
import "react-activity/dist/Levels.css";
import "react-activity/dist/Sentry.css";
import "react-activity/dist/Spinner.css";
import "react-activity/dist/Squares.css";
import "react-activity/dist/Digital.css";
import "react-activity/dist/Bounce.css";
import "react-activity/dist/Windmill.css";

import Layout from "@components/Layout/Layout";
import styles from "@styles/UI/ActivityIndicator.module.css";

const Indicator = ({ type, size, color, speed }) => {
  switch (type) {
    case "dots":
      return (
        <Dots size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
    case "levels":
      return (
        <Levels size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
    case "sentry":
      return (
        <Sentry size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
    case "spinner":
      return (
        <Spinner size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
    case "squares":
      return (
        <Squares size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
    case "digital":
      return (
        <Digital size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
    case "bounce":
      return (
        <Bounce size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
    case "windmill":
      return (
        <Windmill
          size={size || 20}
          color={color || "#ccc"}
          speed={speed || 1}
        />
      );
    default:
      return (
        <Dots size={size || 20} color={color || "#ccc"} speed={speed || 1} />
      );
  }
};

export default function ActivityIndicator({ type, size, color, speed }) {
  return (
    <Layout>
      <div className={styles.center}>
        <Indicator type={type} size={size} color={color} speed={speed} />
      </div>
    </Layout>
  );
}
