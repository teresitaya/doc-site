import {NgDocPage} from '@ng-doc/core';
import ArchitectureDocumentationCategory from './ng-doc.category';

const ArchitectureDocumentationPage: NgDocPage = {
	title: `Architecture Documentation`,
	mdFile: './index.md',
	category: ArchitectureDocumentationCategory,
	order: 1
};

export default ArchitectureDocumentationPage;
