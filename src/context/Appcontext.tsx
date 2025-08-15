import type { ReactNode } from "react";
import { createContext, useContext } from "react";

interface AppContextType {
    // Define the types for your context here
    // For example, you might have a user object or theme settings
    user?: { id: string; name: string };
    theme?: 'light' | 'dark';
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
// custom hook to use the AppContext
// This will allow you to access the context in your components easily
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}

export const AppContextProvide = ({ children }: { children: ReactNode }) => {
    return (
        <AppContext.Provider value={{
            // Provide default values or state management logic here
            user: { id: '1', name: 'Guest' }, //  default user
            theme: 'light' // default theme
        }}>
            {children}
        </AppContext.Provider>
    )
}