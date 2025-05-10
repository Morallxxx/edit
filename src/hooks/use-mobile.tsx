import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Função para atualizar o estado
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Adiciona o listener de mudança
    mql.addEventListener("change", onChange);

    // Configura o estado inicial
    setIsMobile(mql.matches);

    // Cleanup no efeito
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile ?? false; // Retorna `false` se `isMobile` for undefined
}
