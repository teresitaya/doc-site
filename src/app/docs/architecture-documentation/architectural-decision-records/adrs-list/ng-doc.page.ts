import {NgDocPage} from '@ng-doc/core';
import ArchitecturalDecisionRecordsCategory from '../architectural-decision-records/ng-doc.category';

const ADRsListPage: NgDocPage = {
	title: `ADRs List`,
	mdFile: './index.md',
	category: ArchitecturalDecisionRecordsCategory,
	order: 2
};

export default ADRsListPage;
