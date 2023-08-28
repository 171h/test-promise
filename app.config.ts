export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'cool',
    tabs: {
      wrapper: 'test-wrapper relative space-y-2',
      container: 'test-container relative w-full !m-0 bg-red-400',
      base: 'test-base focus:outline-none',
      list: {
        base: 'relative test-list-base !inline-flex rounded-none gap-x-0.5 !p-0 overflow-x-auto overflow-y-hidden',
        background: 'bg-gray-100 dark:bg-gray-800',
        rounded: 'rounded-lg',
        shadow: '',
        padding: 'p-1',
        height: 'h-10',
        width: 'w-full',
        marker: {
          wrapper: 'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none test-list-marker-wrapper',
          base: 'w-full test-list-marker-base absolute h-0.5 z-50 rounded-none !bg-primary',
          background: 'bg-white dark:bg-gray-900',
          rounded: 'rounded-md',
          shadow: 'shadow-sm',
        },
        tab: {
          base: 'relative inline-flex items-center justify-start flex-shrink-0 whitespace-nowrap focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out test-list-tab-base !max-w-3xs w-fit h-full bg-gray-200 rounded-none !p-1',
          background: '',
          active: 'text-gray-900 dark:text-white bg-red-400',
          inactive: 'text-gray-500 dark:text-gray-400',
          height: 'h-8',
          padding: 'pl-2 pr-1',
          size: 'text-sm',
          font: 'font-medium',
          rounded: 'rounded-md',
          shadow: '',
        },
      },
    },
  },
})
