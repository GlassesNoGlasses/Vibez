

export default interface SearchBarProps {
    placeholder: string | null;
    onChange?: (query: string) => void;
    onEnter: (query: string) => void;
}
