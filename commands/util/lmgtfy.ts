import { Command, CommandContext } from '../../deps.ts';
import type { Args } from '../../deps.ts';

export default class LMGTFYCommand extends Command {
  name = 'lmgtfy';
  category = 'util';
  args: Args[] = [
    {
      name: 'query',
      match: 'rest',
    },
  ];
  execute(ctx: CommandContext) {
    const query = ctx.args!.query as string;

    return ctx.channel.send(
      'https://lmgtfy.app/?q=' + query.split(' ').join('+'),
    );
  }
}
