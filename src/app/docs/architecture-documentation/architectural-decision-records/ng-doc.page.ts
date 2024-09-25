import {NgDocPage} from '@ng-doc/core';
import ArchitecturalDecisionRecordsCategory from './architectural-decision-records/ng-doc.category';

const ArchitecturalDecisionRecordsPage: NgDocPage = {
	title: `Architectural Decision Records`,
	mdFile: './index.md',
	category: ArchitecturalDecisionRecordsCategory,
	order: 1
};

export default ArchitecturalDecisionRecordsPage;
