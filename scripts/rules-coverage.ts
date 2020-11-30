import { pickBy, difference, intersection } from 'lodash';
import type { TSESLint } from '@typescript-eslint/experimental-utils';

const prettierRules = ([
  'eslint-config-prettier',
  'eslint-config-prettier/@typescript-eslint',
  'eslint-config-prettier/babel',
  'eslint-config-prettier/flowtype',
  'eslint-config-prettier/react',
  'eslint-config-prettier/standard',
  'eslint-config-prettier/unicorn',
  'eslint-config-prettier/vue',
] as const).flatMap(pkg => Object.keys(require(pkg).rules));

const typescriptRule = require('@typescript-eslint/eslint-plugin')
  .rules as Record<string, TSESLint.RuleModule<string, []>>;

const NAMESPACE_CONFIG = {
  typescript: {
    rulePrefix: '@typescript-eslint/',
    ruleConfig: require('../typescript.js').rules as Record<string, any>,
    ruleDict: pickBy(
      typescriptRule,
      x => x.meta?.docs?.requiresTypeChecking !== true
    ),
    ignoreRuleDict: pickBy(
      typescriptRule,
      x => x.meta?.docs?.requiresTypeChecking === true
    ),
  },
  typescriptRequiringTypeChecking: {
    rulePrefix: '@typescript-eslint/',
    ruleConfig: require('../typescript-requiring-type-checking.js')
      .rules as Record<string, any>,
    ruleDict: pickBy(
      typescriptRule,
      x => x.meta?.docs?.requiresTypeChecking === true
    ),
    ignoreRuleDict: {},
  },
} as const;

Object.entries(NAMESPACE_CONFIG)
  .map(([namespace, { rulePrefix, ruleConfig, ruleDict, ignoreRuleDict }]) => {
    const configList = Object.keys(ruleConfig);
    const allRuleList = Object.entries(ruleDict).map(([key, { meta }]) => ({
      ruleName: rulePrefix + key,
      ...meta,
    }));
    const ignoreRules = Object.keys(ignoreRuleDict).map(
      key => rulePrefix + key
    );

    const allRules = allRuleList.map(x => x.ruleName);
    const rules = allRuleList
      .filter(x => x.deprecated !== true)
      .map(x => x.ruleName);
    const deprecatedRules = allRuleList
      .filter(x => x.deprecated === true)
      .map(x => x.ruleName);

    const needAddRules = difference(
      difference(rules, prettierRules),
      configList
    );
    const needRemoveDeprecatedRules = intersection(configList, deprecatedRules);
    const needRemovePrettierRules = intersection(configList, prettierRules);
    const otherRules = difference(
      difference(configList, allRules),
      ignoreRules
    ).filter(name => !configList.includes('@typescript-eslint/' + name));

    return {
      namespace,
      needAddRules,
      needRemoveDeprecatedRules,
      needRemovePrettierRules,
      otherRules,
    } as const;
  })
  .forEach(
    ({
      namespace,
      needAddRules,
      needRemoveDeprecatedRules,
      needRemovePrettierRules,
      otherRules,
    }) => {
      console.log('----------------------------------------------------------');
      console.log('namespace', namespace);
      needAddRules.length > 0 && console.log('needAddRules', needAddRules);
      needRemoveDeprecatedRules.length > 0 &&
        console.log('needRemoveDeprecatedRules', needRemoveDeprecatedRules);
      needRemovePrettierRules.length > 0 &&
        console.log('needRemovePrettierRules', needRemovePrettierRules);
      otherRules.length > 0 && console.log('otherRules', otherRules);
    }
  );
