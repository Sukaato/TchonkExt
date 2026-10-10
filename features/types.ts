/** Static description of a feature: pure data, safe to import from any context. */
export interface FeatureMeta {
  /** Name of the boolean setting that turns the feature on or off. */
  key: string;
  /** Section title on the options page. */
  group: string;
  title: string;
  description: string;
  /** Optional extra choice shown under the switch. */
  select?: {
    key: string;
    label: string;
    options: ReadonlyArray<{ value: string; label: string }>;
  };
  defaults: Record<string, boolean | string>;
}
