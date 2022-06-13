import React from 'react'
import { names } from '@/lib/names';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Button from './Button';

const Names = ({placeholder}) => {
    const [value, setValue] = React.useState('');
    const allFriends = names.map((name) => name.name);

    const router = useRouter();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      if(value) {
        router.push(`/profile/${value}`);
      }else{
        toast.error('Please select a name')
      }
      
    }
  return (
    <>
        <div className='m-2'>
          <form className='flex flex-col justify-center items-center'>  
            <Autocomplete
            value={value}
            setValue={setValue}
            name="search"
            label="Friends"
            placeholder={placeholder}
            suggestions={allFriends}
            notFound="No Friends available!"
          />
          <Button onClick={handleSubmit} text="Search" disabled={false} />
        </form>
    </div>
    </>
  )
}

const style = {
  label: `text-white`,
  disabled: `cursor-not-allowed`,
  container: `relative mb-6 mt-3`,
  default: `rounded-lg w-full flex-1 mt-1 py-1.5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent border border-gray-300`,
  suggestion: {
    activeItem: 'bg-yellow-300',
    item: `px-4 py-3 focus text-sm text-black cursor-pointer hover:bg-gray-300`,
    list: `shadow-xl absolute top-full left-0 right-0 border w-auto md:max-w-full overflow-y-auto max-h-80 mt-2 bg-white p-3 z-20`,
  },
};

function Autocomplete({
  name,
  label,
  suggestions,
  value,
  setValue,
  notFound,
  ...rest
}: any) {
  const ref = React.useRef(null);
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState([]);

  //close suggestions list when click outside
  React.useEffect(() => {
    const handleOutsideClick = (event: { target: any; }) => {
        if (!showSuggestions) return;
        setShowSuggestions(false);
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [showSuggestions, ref]);

  const handleChange = React.useCallback(
    (e) => {
      const userInput = e.currentTarget.value;
      const filteredSuggestions = suggestions.filter(
        (suggestion: any) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
      );

      setActiveSuggestion(0);
      setFilteredSuggestions(filteredSuggestions);
      setShowSuggestions(true);
      setValue(e.currentTarget.value);
    },
    [setValue, suggestions],
  );

  const onClick = (e: { currentTarget: { innerText: any; }; }) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setValue(e.currentTarget.innerText);
  };

  const onKeyDown = (e: { keyCode: number; }) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setValue(filteredSuggestions[activeSuggestion]);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && value) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className={style.suggestion.list}>
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            if (index === activeSuggestion) {
              className = `${style.suggestion.item} ${style.suggestion.activeItem}`;
            }

            if (index !== activeSuggestion) {
              className = style.suggestion.item;
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="mt-4 text-sm text-gray-700">
          <em>{notFound}</em>
        </div>
      );
    }
  }
  return (
    <div className={style.container}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input
        autoComplete="off"
        className={style.default}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        value={value}
        {...rest}
      />
      {suggestionsListComponent}
    </div>
  );
}

export default Names