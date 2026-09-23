import { useState, useCallback } from 'react';

interface SubmitOptions {
  delayMs?: number;
  successDurationMs?: number;
  onSuccess?: () => void;
}

/**
 * Custom hook to standardize async field form submissions, validation feedback,
 * and button state transitions across all farm registration screens.
 */
export function useAsyncFormSubmit() {
  const [isSaving, setIsSaving] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setErrorMessage(null);
  }, []);

  const executeSubmit = useCallback(
    async (
      validateFn: () => string | null,
      saveFn: () => void | Promise<void>,
      options: SubmitOptions = {}
    ) => {
      const { delayMs = 450, successDurationMs = 2400, onSuccess } = options;

      const error = validateFn();
      if (error) {
        setErrorMessage(error);
        return false;
      }

      setErrorMessage(null);
      setIsSaving(true);

      return new Promise<boolean>((resolve) => {
        setTimeout(async () => {
          try {
            await saveFn();
            setIsSaving(false);
            setIsSuccess(true);
            if (onSuccess) {
              onSuccess();
            }
            setTimeout(() => {
              setIsSuccess(false);
            }, successDurationMs);
            resolve(true);
          } catch (err) {
            setIsSaving(false);
            setErrorMessage(err instanceof Error ? err.message : 'Error inesperado al guardar');
            resolve(false);
          }
        }, delayMs);
      });
    },
    []
  );

  return {
    isSaving,
    isSuccess,
    errorMessage,
    setErrorMessage,
    clearError,
    executeSubmit
  };
}
