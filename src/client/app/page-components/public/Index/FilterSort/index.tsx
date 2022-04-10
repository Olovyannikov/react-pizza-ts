import { Container } from '@/ui';
import { ItemsTypesFilter } from '@/components';
import { filters } from './data';

export const FilterSort = (): JSX.Element => {
    return (
        <Container>
            <ItemsTypesFilter items={filters} />
        </Container>
    );
};
