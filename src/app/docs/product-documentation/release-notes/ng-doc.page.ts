import {NgDocPage} from '@ng-doc/core';
import ProductDocumentationCategory from '../ng-doc.category';

const ReleaseNotesPage: NgDocPage = {
	title: `Release Notes`,
	mdFile: './index.md',
	category: ProductDocumentationCategory,
	order: 3,
};

export default ReleaseNotesPage;
