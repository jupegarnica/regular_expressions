/**
 * description:
 * Does not allow IP for domain name : hello@154.145.68.12 does not allow literal addresses &quot;hello, how are you?&quot;@world.com allows numeric domain names after the last &quot;.&quot; minimum 2 letters
 * From: https://regexlib.com/REDetails.aspx?regexp_id=333
 */

// TODO decide if we want to use this
// export const email_regex = /[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})/gm

/**
Allow IP as domain name: hello@154.145.68.12 does allow literal addresses &quot;hello, how are you?&quot;@world.com allows numeric domain names after the last &quot;.&quot; minimum 2 letters
 */
export const email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+/;

export const email_description =
  "Allow IP as domain name: hello@154.145.68.12 does allow literal addresses &quot;hello, how are you?&quot;@world.com allows numeric domain names after the last &quot;.&quot; minimum 2 letters";

export const email_should_match: string[] = [
  "juan@garn.dev",
  "email+foo@email.com",
  "email+112@email.com",
  "he_llo@worl.d.com",
  "EMAIL@DOMAIN.COM",
  "e.m.a.il@email.com",
  "email@email.uk.co",
  "bar.ba@test.co.uk",
  "em|ail@email.com",
  "hel.l-o@wor-ld.museum",
  "h1ello@123.com",
  "hello@154.145.68.12",
];

export const email_should_not_match: string[] = [
  "em|ail@email",
  "email&email.com",
  "hello@worl_d.com",
  "he&amp;llo@world.co1",
  ".hello@wor#.co.uk",
  "juan@@garn.dev",
  // "hello@154.145",
];
