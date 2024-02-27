import styles from "./css/select.module.css";

export type SelectOption = {
  label: string;
  value: string | number;
};

type SelectProps = {
  value: SelectOption;
  onChange?: (value: SelectOption | undefined) => void;
  options: SelectOption[];
};

export function Select({ value, onChange, options }: SelectProps) {
  return (
    <>
      <div tabIndex={0} className={styles.container}>
        <span className={styles.value}>{value.label}</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${styles.show}`}>
          {options.map((option) => (
            <li key={option.label} className={styles.option}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// &times; - to add X button
