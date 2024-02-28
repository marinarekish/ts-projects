import { useEffect, useState } from "react";
import styles from "./css/select.module.css";
import { SelectOption, SelectProps } from "./types/SelectPropsTypes";

export function Select({ multiple, value, options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  // to highlight hover option
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  // to close the list
  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  // to select an option and show it
  function selectOption(option: SelectOption) {
    if (multiple) {
      // checking if we already have selected this option
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option)); // => remove it from the list
      } else {
        onChange([...value, option]); // add option to the list
      }
    } else {
      if (option !== value) onChange(option); // if we select the selected option - nothing gonna change
    }
  }

  // to highlight selected option
  function isOptionSelected(option: SelectOption) {
    // if option and value are the same element then it is the currently selected option
    return multiple ? value.includes(option) : option === value;
  }

  // to start highlighting from the first element in list after closing he list of options
  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      // onBlur - click outside the div will close options list
      onBlur={() => setIsOpen(false)}
      // The tabIndex allows to make HTML elements focusable, allow or prevent them from
      // being sequentially focusable and determine their relative ordering
      // for sequential focus navigation.
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>
        {multiple
          ? value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className={styles["option-badge"]}
              >
                {v.label}
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        onClick={(e) => {
          // .stopPropagation() will stop the click event from going all the way to parent div
          e?.stopPropagation();
          clearOptions();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>

      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${
              index === highlightedIndex ? styles.highlighted : ""
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
