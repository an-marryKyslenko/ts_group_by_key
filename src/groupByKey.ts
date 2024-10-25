type GroupsMap<T> = {
  [key: string | number]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const value = item[key] as string | number;
    const sortedItem = items.filter((el) => el[key] === value);

    return { ...acc, [value]: sortedItem };
  }, {});
}
