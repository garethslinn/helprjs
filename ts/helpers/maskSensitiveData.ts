// maskSensitiveData(people, ['firstName', 'secondName']);

export function maskSensitiveData<T extends Record<string, any>>(array: T[], fields: (keyof T)[]): T[] {
    return array.map(item => {
        const maskedItem = { ...item };
        fields.forEach(field => {
            if (maskedItem[field] !== undefined && maskedItem[field] !== null) {
                maskedItem[field] = '*'.repeat(maskedItem[field]!.toString().length) as unknown as T[keyof T];
            }
        });
        return maskedItem;
    });
}

