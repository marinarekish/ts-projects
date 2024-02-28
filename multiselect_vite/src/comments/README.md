# in Select file

to set list visible or none

    const [isOpen, setIsOpen] = useState(false);

to highlight hover option

    const [highlightedIndex, setHighlightedIndex] = useState(0);

to close the list

    function clearOptions() {}

onBlur - click outside the div will close options list

    onBlur={() => setIsOpen(false)}

The tabIndex allows to make HTML elements focusable, allow or prevent them from being sequentially focusable and determine their relative ordering for sequential focus navigation.

      tabIndex={0}

stopPropagation() will stop the click event from going all the way to parent element

    e?.stopPropagation()

### fn selectOption - to select an option and show it

    function selectOption(option: SelectOption) {
        if (multiple) {
            if (value.includes(option)) {  (1)
                onChange(value.filter((o) => o !== option)); (2)
            } else {
                onChange([...value, option]); (3)
            }
        } else {
            if (option !== value) onChange(option); (4)
        }
    }

1 - checking if we already have selected this option

2 - or remove it from the list

3 - add option to the list

4 - if we select the selected option - nothing gonna change

### fn isOptionSelected to highlight selected option

if option and value are the same element then it is the currently selected option

    function isOptionSelected(option: SelectOption) {
        return multiple ? value.includes(option) : option === value;
    }

### to start highlighting from the first element in list after closing he list of options

    useEffect(() => {
        if (isOpen) setHighlightedIndex(0);
    }, [isOpen]);
