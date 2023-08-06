import type {Meta, StoryObj} from '@storybook/react';
import TableComponent from "./index";


//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof TableComponent> = {
  component: TableComponent,
  tags:['autodocs']
};

export default meta;
type Story = StoryObj<typeof TableComponent>;

export const BasicTable: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['Operator', 'Headset Display', '3G Availability'],
    rows: [
      ['*Celcom Axiata(LTE)', 'CELCOM/ My Celcom / 502 19', 'Yes'],
      ['*DiGi Telecom (LTE)', 'DiGi 1800 / DiGi /  MYMY18', 'Yes'],
      ['*Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
      ['U Mobile (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
    ],
    tableName: 'Contract details',
    className: 'primary-table'
  },
};

export const TableWithSorting: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['Operator', 'Headset Display', '3G Availability'],
    rows: [
      ['*Celcom Axiata(LTE)', 'CELCOM/ My Celcom / 502 19', 'Yes'],
      ['*DiGi Telecom (LTE)', 'DiGi 1800 / DiGi /  MYMY18', 'Yes'],
      ['*Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
      ['U Mobile (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
    ],
    tableName: 'Contract details',
    className: 'primary-table',
    sortable: true,
    initSortAscending: false,
    initSortColumnIndex: 0
  },
};

export const TableWithRadioButton: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['Operator', 'Headset Display', '3G Availability'],
    rows: [
      ['*Celcom Axiata(LTE)', 'CELCOM/ My Celcom / 502 19', 'Yes'],
      ['*DiGi Telecom (LTE)', 'DiGi 1800 / DiGi /  MYMY18', 'Yes'],
      ['*Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
      ['U Mobile (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
    ],
    tableName: 'Contract details',
    className: 'primary-table',
    type: 'radio'
  },
};

export const TableWithCheckBox: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['Operator', 'Headset Display', '3G Availability'],
    rows: [
      ['*Celcom Axiata(LTE)', 'CELCOM/ My Celcom / 502 19', 'Yes'],
      ['*DiGi Telecom (LTE)', 'DiGi 1800 / DiGi /  MYMY18', 'Yes'],
      ['*Maxis (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
      ['U Mobile (LTE)', 'U Mobile / MYS 18 / MY 18', 'Yes'],
    ],
    tableName: 'Contract details',
    className: 'primary-table',
    type: 'checkbox'
  },
};
export const TableLayout1: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['Name', 'Mobile', 'Expiry', 'Penalty'],
    rows: [
      ['Mavis Chen', '8899 7654', 'Dec 2022', '$600'],
      ['Rodney Artichokejkgkjgjhg', '9988 7676', 'Nov 2022', '$300'],
      ['Valentino Morose', '8900 7654', 'Dec 2022', '$600'],
      ['Valentino Morose', '8900 7654', 'Dec 2022', '$600'],
      ['Eric Widget', '9808 7654', 'Dec 2022', '$600'],

    ],
    tableName: 'Contract details',
    className: 'primary-table',
    type: 'radio'
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone14pro'
    }
  }
};

export const TableLayout2: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['Destination', 'Mins', 'Rate/min'],
    rows: [
      ['Bangladesh', '240', '$0.03'],
      ['China', '600', '$0.01'],
      ['India', '600', '$0.01'],
      ['Indonesia', '90', '$0.07'],
      ['Malaysia', '60', '$0.01'],
      ['Myanmar', '35', '$0.17'],
      ['Philippines', '40', '$0.15'],
      ['Thailand', '120', '$0.05'],
      ['Vietnam', '60', '$0.10'],
    ],
    tableName: 'Fee',
    className: 'primary-table',
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone14pro'
    }
  }
};

export const TableWithCheckBoxMobile: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['BRN', 'Company Name', ],
    rows: [
      ['198702333K','Blue Ocean International'],
      ['198702333K','Red Electronics'],
      ['196700335H','Yellow Gaming'],
      ['196800306E','Purple Automobiles'],
      ['199131124V','Diamond Interiors Holdings'],
      ['200201624D','Omnichannel Solutions International']
    ],
    tableName: 'Company',
    type:'checkbox',
    className: 'primary-table',
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone14pro'
    }
  }
};

export const TableWithRadioButtonMobile: Story = {
  args: {
    //👇 The args you need here will depend on your component
    headers: ['BRN', 'Company Name', ],
    rows: [
      ['198702333K','Blue Ocean International'],
      ['198702333K','Red Electronics'],
      ['196700335H','Yellow Gaming'],
      ['196800306E','Purple Automobiles'],
      ['199131124V','Diamond Interiors Holdings'],
      ['200201624D','Omnichannel Solutions International']
    ],
    tableName: 'Company',
    type:'radio',
    className: 'primary-table',
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone14pro'
    }
  }
};

